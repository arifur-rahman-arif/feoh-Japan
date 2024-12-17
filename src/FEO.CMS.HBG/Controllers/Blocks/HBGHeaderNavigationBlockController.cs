using EPiServer.Core.Internal;
using EPiServer.Find;
using EPiServer.Globalization;
using EPiServer.Logging;
using EPiServer.ServiceLocation;
using EPiServer.Shell;
using EPiServer.SpecializedProperties;
using FEO.CMS.HBG.Business.Dictionary;
using FEO.CMS.HBG.Core.Blocks.Rendezvous;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using FEO.CMS.HBG.Helper;
using FEO.CMS.HBG.Models;
using Microsoft.AspNetCore.Mvc;
using Polly;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGHeaderNavigationBlockController : BlockControllerBase<HBGHeaderNavigationBlock>
    {
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(HBGHeaderNavigationBlockController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGHeaderNavigationBlock currentContent)
        {
            var rootPageReference = ContentReference.StartPage;
            var home = contentLoader.Get<HBGHomePage>(rootPageReference);
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            
            var session = HttpContext?.Session;
            var insidersConfig = CreateInsiderConfig(site);
            var model = new HBGHeaderNavBlock();

            //var bookingWidgetData = mvcContext.GetDataSourceItem<IBookingWidgetData>();
            model = GetHeaderNavigation();
            //model.Languages = GetLanguages();
            //model.Announcement = this.viewService.GetAnnouncement(id);
            //model.PromotionBar = this.viewService.GetPromotionBar(id);

            model.SfeBookingConfig = CreateBookingConfig(site);
            List<HBGSiteLanguageBlock> headerlist = new List<HBGSiteLanguageBlock>();
            //model.Columns = SetPropertyNavigationNew(model.Menus);
            //ViewData["SubNavigation"] = this.provider.GetCurrent<StayFarEast.Domain.Models.View>().SubNavigation;

            if (model.Languages != null)
            {
                foreach (var language in model.Languages)
                {
                    var header = new HBGSiteLanguageBlock();
                    header.Title = language.Title;
                    header.LanguageName = contentLoader.Get<IContent>(language.Language).Name;
                    headerlist.Add(header);
                }
            }

            model.sfelanguage = ContentLanguage.PreferredCulture.Name;
            model.HeaderLanguagesList = headerlist;

            //AddPopularDestination();
            //model.BookingWidgetData = bookingWidgetData != null ? bookingWidgetData : null;
            ViewData["Istestenabled"] = false;

            var bookNowMessage = home;

            model.ValidationMessage = bookNowMessage;
            model.ForgotPasswordLink = insidersConfig.ForgotPasswordPage;
            //model.SignUpLink = new LinkItem
            //{
            //    Href = insidersConfig.SignUpPage.Href,
            //    Title = insidersConfig.SignUpPage.Title,
            //    Text = insidersConfig.SignUpPage.Text
            //};
            model.SignOutLink = insidersConfig.SignOutPage != null ? insidersConfig.SignOutPage.Href : string.Empty;
            ViewData["ErrorMessage"] = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersLoginErrorMsg);
            model.ChainID = insidersConfig?.ChainID;

            //FormAuthentication.ValidateAuthentication();
            model.ShowSignIn = insidersConfig.ShowSignInDropdownInheader;
            model.SignInSignUpText = insidersConfig?.SignInSignUpText;

            //model.GenericPopup = PopupHelper.GetSiteWideGenericPopup(this.navigationService, this.configFactory, this.provider, this);
            model.ShowSignInCaptcha = insidersConfig.ShowCaptchaonSignInModal;
            model.CaptchaTitle = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersCaptchaVerification);
            model.CaptchaErrorMessage = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersCaptchaErrorMessage);

            model.ShouldDisplaySignUpPopup = true;
            if (model.TextMessage == null || model.ShowSignUp == false)
            {
                model.ShouldDisplaySignUpPopup = false;
            }

            model.ShouldDisplayPopupAfterLogin = true;
            if (model.SignInTextMessage == null || model.DisplayPopUpAfterSignIn == false)
            {
                model.ShouldDisplayPopupAfterLogin = false;
            }
            session?.SetString("InitialSession", "feh");

            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGHeaderNavigationBlock/Index.cshtml", model);
        }
        public HBGHeaderNavBlock GetHeaderNavigation()
        {
            try
            {
                var globalAssetsFolder = ContentReference.GlobalBlockFolder;
                var headerNavFolder = BlockHelper.GetDescendantPath(globalAssetsFolder, HBGPathConstants.StayFarEastNavigation + "/");

                if (headerNavFolder != null)
                {
                    var headerNav = new HBGHeaderNavBlock();
                    
                    headerNav.Columns = contentLoader.GetChildren<HBGHeaderNavBlock>(headerNavFolder).Where(x=>x.GetOriginalType() == typeof(HBGHeaderNavBlock));
                    var getNavFolder = contentLoader.GetChildren<IContent>(headerNavFolder).FirstOrDefault(block => block.Name.Equals(TemplateNames.HeaderNav, StringComparison.OrdinalIgnoreCase) && block.GetOriginalType() == typeof(ContentFolder));
                    
                    if (getNavFolder != null) 
                    {
                        var menuLinks = contentLoader.GetChildren<HBGNavigationLinkBlock>(getNavFolder.ContentLink);
                        headerNav.MenuLinks = menuLinks.OrderBy(x=>x.SortOrder);
                    }

                    return headerNav;
                }
            }
            catch (Exception ex)
            {
                logger.Error("GetHeaderNavigation() Error: " + ex.Message);
            }
            return null;
        }
        //private void AddPopularDestination()
        //{
        //    var searchParam = new SearchParam
        //    {
        //        PageNumber = 1,
        //        PageSize = Constants.SearchPageSizeDefault100,
        //        Language = ContentLanguage.PreferredCulture.Name,
        //        Recommend = true
        //    };

        //    var resultRecommend = this.searchEngine.SearchListingForBookingWidget(searchParam);

        //    var properties = resultRecommend.Results.Where(x => !string.IsNullOrEmpty(x.Title))
        //        .OrderBy(o => o.SortOrder.AsInt())
        //        .Select(x => new PopularDestination
        //        {
        //            Title = x.Title,
        //            Id = x.Id.ToString("B").ToUpper(),
        //            Mindays = x.MinNights,
        //            MindayText = x.MinNightsText,
        //            MaxNoOfPax = x.MaximumNumberofPax,
        //            MinNoOfAdults = x.MinimumNumberofAdults,
        //            MinNoOfChildren = x.MinimumNumberofChildren,
        //            MaxNoOfGuests = string.Format(DictionaryHelper.DictionaryEntry(DictionaryKeys.MaxNumberOfGuests,string.Empty), x.MaximumNumberofPax),
        //            PropertyNote = !string.IsNullOrEmpty(x.PropertyNote) ? x.PropertyNote : "",
        //            PropertyNoteColor = !string.IsNullOrEmpty(x.PropertyNoteColor) ? x.PropertyNoteColor : "",
        //        });

        //    var citiesRecommend = resultRecommend.Results
        //        .Where(x => !string.IsNullOrEmpty(x.City.Title))
        //        .GroupBy(c => new
        //        {
        //            c.City.Title,
        //        })
        //        .Select(gcs => new PopularDestination
        //        {
        //            Title = gcs.Key.Title,
        //        });

        //    var searchParamCities = new SearchParam
        //    {
        //        PageNumber = 1,
        //        PageSize = Constants.SearchPageSizeDefault100,
        //        Language = ContentLanguage.PreferredCulture.Name,
        //    };
        //    SearchFilter sfCity = new SearchFilter();
        //    sfCity.Name = "city";
        //    sfCity.Value = citiesRecommend.Select(x => x.Title).ToArray();
        //    searchParamCities.Filters.Add(sfCity);

        //    var resultCities = this.searchEngine.SearchListingForBookingWidget(searchParamCities);

        //    var cities = resultCities.Results
        //        //.Where(x => x.City.Title.ToLower().Contains(query.ToLower()))
        //        .GroupBy(c => new
        //        {
        //            c.City.Title,
        //        })
        //        .Select(gcs => new PopularDestination
        //        {
        //            Title = gcs.Key.Title,
        //            Code = gcs.Key.Title,
        //            Total = gcs.Count(),
        //            Mindays = 1,
        //            MindayText = "",
        //            MaxNoOfPax = 2,
        //            MinNoOfAdults = 1,
        //            MinNoOfChildren = 0,
        //            MaxNoOfGuests = string.Format(DictionaryHelper.DictionaryEntry(DictionaryKeys.MaxNumberOfGuests, string.Empty), 2),
        //            PropertyNote = "",
        //            PropertyNoteColor = "",
        //        });

        //    ViewData["PopularDestination"] = Tuple.Create(cities, properties);
        //}
        //private IEnumerable<IContent> SetPropertyNavigationNew(IEnumerable<HBGNavigationLinkBlock> primarymenu)
        //{
        //    if (primarymenu == null)
        //        return null;

        //    foreach (var item in primarymenu.Where(x=>x.Name.Equals(TemplateNames.HeaderNav, StringComparison.OrdinalIgnoreCase)))
        //    {
        //        List<string> locationCountryList = new List<string>();
        //        List<string> locationCityList = new List<string>();
        //        Dictionary<string, string> locationBrandList = new Dictionary<string, string>();
        //        List<string> typeList = new List<string>();

        //        var menu = new HBGNavigationLinkBlock();
        //        menu.MenuLinks = contentLoader.GetChildren<HBGNavigationLinkBlock>(item.ContentLink);
        //        var getFolders = contentLoader.GetChildren<ContentFolder>(item.ContentLink);
        //        IList<HBGSubNavigationLinkBlock> subNav;
        //        foreach (var folder in getFolders)
        //        {
        //            var test = contentLoader.GetChildren<HBGSubNavigationLinkBlock>(folder.ContentLink);
        //        }
        //        //if (menu.IsDeal)
        //        //{
        //        //    var deals = this.dealService.GetAllDeals();

        //        //    if (deals.IsNotNullAndAny())
        //        //    {
        //        //        menu.DealList = deals.Take(8);
        //        //    }
        //        //}
        //        //else
        //        //{
        //        foreach (var submenulink in menu.MenuFolders)
        //        {
        //            if (submenulink.MainLink != null)
        //            {
        //                IContent submenulinkItem = Sitecore.Context.Database.GetItem(submenulink.MainLink.TargetId.ToString());
        //                if (submenulinkItem != null && submenulinkItem.TemplateID.ToGuid().Equals(TemplateIds.Listing))
        //                {
        //                    menu.Isproperty = true;
        //                    var propertyitem = this.provider.GetItem<Listing>(submenulinkItem.ID.ToString());
        //                    submenulink.Isproperty = true;
        //                    if (propertyitem.City != null)
        //                    {
        //                        submenulink.City = propertyitem.City?.Title;
        //                    }
        //                    if (propertyitem.Country != null)
        //                    {
        //                        submenulink.Country = propertyitem.Country?.Title;
        //                    }
        //                    if (propertyitem.Brand != null)
        //                    {
        //                        submenulink.Brand = propertyitem.Brand?.Title;
        //                        if (!string.IsNullOrEmpty(submenulink.Brand) && !string.IsNullOrEmpty(propertyitem.Brand.Name))
        //                            if (!locationBrandList.ContainsKey(propertyitem.Brand.Name))
        //                                locationBrandList.Add(propertyitem.Brand.Name, submenulink.Brand);

        //                    }
        //                    if (propertyitem.Type != null)
        //                    {
        //                        submenulink.Type = propertyitem.Type;
        //                        if (!string.IsNullOrEmpty(submenulink.Type))
        //                            typeList.Add(submenulink.Type);
        //                    }

        //                    if (propertyitem.Country != null)
        //                    {
        //                        ILocationPreview preview = this.provider.GetItem<ILocationPreview>(propertyitem.Country.Id);

        //                        if (propertyitem.City != null)
        //                        {
        //                            Place city = this.provider.GetItem<Place>(propertyitem.City.Id);
        //                            locationCityList.Add(city?.Title);
        //                        }
        //                        if (propertyitem.Country != null)
        //                        {
        //                            locationCountryList.Add(preview?.Title);
        //                        }
        //                    }
        //                    else
        //                    {
        //                        submenulink.CountryCity = "-";
        //                        locationCityList.Add("-");
        //                        locationCountryList.Add("-");
        //                    }
        //                }
        //            }

        //        }
        //        //}

        //        //if (locationCityList.Any())
        //        //    menu.CityList = locationCityList.Distinct();
        //        //if (locationCountryList.Any())
        //        //{
        //        //    menu.CountryList = locationCountryList.Distinct();
        //        //}
        //        //if (locationBrandList.Any())
        //        //    menu.BrandList = locationBrandList;
        //        //if (typeList.Any())
        //        //    menu.TypeList = typeList.Distinct();
        //    }
        //        return primarymenu;
        //}
        //public IEnumerable<HBGSiteLanguageBlock> GetLanguages()
        //{
        //    var siteLanguages = Context.Query<SiteLanguage>(string.Format("{0}/*[@@templatename='{1}']",
        //        PathMapper.Get(Paths.StayFarEastLanguages),
        //        TemplateNames.SiteLanguage));

        //    foreach (var siteLanguage in siteLanguages)
        //    {
        //        Sitecore.Data.Items.Item _languageitem = Context.Database.GetItem(siteLanguage.Id.ToString());
        //        Sitecore.Data.Items.Item _childlanguage = Context.Database.GetItem(_languageitem.Fields["Language"].Value);
        //        var language = new HBGSiteLanguageBlock();
        //        language.Name = _childlanguage?.Name;
        //        language.CultureInfo = Sitecore.Globalization.Language.CreateCultureInfo(_childlanguage?.Name);
        //        siteLanguage.Language = language;
        //        yield return siteLanguage;
        //    }
        //}
        //public HBGAnnouncementBlock GetAnnouncement(Guid id = default(Guid))
        //{
        //    var announcements = GetAnnouncements(id);
        //    if (announcements == null || announcements.All(announcement => !announcement.Enabled))
        //        return null;

        //    foreach (var announcement in announcements)
        //    {
        //        if (!announcement.Enabled)
        //            continue;

        //        if (!announcement.StartDate.HasValue && !announcement.EndDate.HasValue)
        //            return announcement;

        //        var now = DateTime.Now;
        //        if (announcement.StartDate.HasValue && announcement.EndDate.HasValue &&
        //            now >= announcement.StartDate.Value && now <= announcement.EndDate.Value)
        //            return announcement;

        //        if (announcement.StartDate.HasValue && now >= announcement.StartDate.Value)
        //            return announcement;

        //        if (announcement.EndDate.HasValue && now <= announcement.EndDate.Value)
        //            return announcement;
        //    }

        //    return null;
        //}
        //public IEnumerable<HBGAnnouncementBlock> GetAnnouncements(Guid id = default(Guid))
        //{
        //    if (id == Guid.Empty)
        //    {
        //        return Context.QueryRelative<HBGAnnouncementBlock>(string.Format("./Announcements/*[@@templatename='{0}']",
        //            TemplateNames.Announcement));
        //    }
        //    else
        //    {
        //        var root = Context.GetItem<IRoot>(id);
        //        var query = string.Format("{0}//#{1}#/Announcements/*[@@templatename='{2}']",
        //            Paths.StayFarEastHome,
        //            root.Name,
        //            TemplateNames.Announcement);

        //        return Context.Query<HBGAnnouncementBlock>(query);
        //    }
        //}
        //public HBGPromotionBarBlock GetPromotionBar(Guid id = default(Guid))
        //{
        //    var promotionbars = GetPromotionBars(id);
        //    if (promotionbars == null || promotionbars.All(promotionbar => !promotionbar.Enabled))
        //        return null;

        //    foreach (var promotionbar in promotionbars)
        //    {
        //        if (!promotionbar.Enabled)
        //            continue;

        //        if (!promotionbar.StartDate.HasValue && !promotionbar.EndDate.HasValue)
        //            return promotionbar;

        //        var now = DateTime.Now;
        //        if (promotionbar.StartDate.HasValue && promotionbar.EndDate.HasValue &&
        //            now >= promotionbar.StartDate.Value && now <= promotionbar.EndDate.Value)
        //            return promotionbar;

        //        if (promotionbar.StartDate.HasValue && now >= promotionbar.StartDate.Value)
        //            return promotionbar;

        //        if (promotionbar.EndDate.HasValue && now <= promotionbar.EndDate.Value)
        //            return promotionbar;
        //    }

        //    return null;
        //}
        //public IEnumerable<HBGPromotionBarBlock> GetPromotionBars(Guid id = default(Guid))
        //{
        //    if (id == Guid.Empty)
        //    {
        //        var parentContentReference = ContentReference.StartPage;
        //        var promotionBars = contentLoader
        //            .GetChildren<HBGPromotionBarBlock>(parentContentReference)
        //            .Where(block => block.GetOriginalType().Name == "PromotionBar")
        //            .ToList();

        //        return Context.QueryRelative<HBGPromotionBarBlock>(string.Format("./PromotionBars/*[@@templatename='{0}']",
        //            TemplateNames.PromotionBar));
        //    }
        //    else
        //    {
        //        var root = Context.GetItem<IRoot>(id);
        //        var query = string.Format("{0}//#{1}#/PromotionBars/*[@@templatename='{2}']",
        //            PathMapper.Get(Paths.StayFarEastHome),
        //            root.Name,
        //            TemplateNames.PromotionBar);

        //        return Context.Query<HBGPromotionBarBlock>(query);
        //    }
        //}
    }
}
