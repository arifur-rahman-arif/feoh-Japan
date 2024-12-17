using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Dictionary;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGDealParticipantsContainerBlockController : BlockComponent<HBGDealParticipantsContainerBlock>
    {
        private static readonly IContentLoader ContentLoader;
        static HBGDealParticipantsContainerBlockController()
        {
            ContentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        }
        protected override IViewComponentResult InvokeComponent(HBGDealParticipantsContainerBlock currentBlock)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = ContentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = ContentLoader.Get<HBGSite>(sitePageReference);

            var Model = new DealParticipantListingViewModel();
            Model.Istestenabled = false;
            //var config = GetRenderingParameters<DealParticipantConfig>();
            //var listingConfig = DealHelper.GetParticipatingPropertiesListingItem();
            //Model.Participants = this.dealService.GetDealParticipants();
            //var listCountries = Model.Participants.Select(x => x.Listing.Country).ToList();

            //if (listCountries != null && listCountries.Any())
            //{
            //    if (listingConfig != null)
            //    {
            //        Model.Countries = DealHelper.GetCountries(Convert.ToInt32(listingConfig.Ordering?.Value), listCountries);
            //    }
            //}

            //Model.Dealparticipantconfig = config;
            //Model.ListingConfig = listingConfig;
            Model.CTAText = DictionaryHelper.DictionaryEntry(DictionaryKeys.CheckAvailabilityText, string.Empty);
            Model.ViewMoreInclusionText = DictionaryHelper.DictionaryEntry(DictionaryKeys.ViewMoreInclusions, string.Empty);
            Model.LearnMoreText = DictionaryHelper.DictionaryEntry(DictionaryKeys.DealLearnMore, string.Empty);
            Model.ViewMoreText = DictionaryHelper.DictionaryEntry(DictionaryKeys.ViewMoreText, string.Empty);
            //var currentItem = Sitecore.Context.Item;
            
            string dealTermAndConditionDesc = string.Empty;
            string dealTermAndConditionTitle = string.Empty;
            
            //if (currentItem != null && currentItem.TemplateID.Guid == TemplateIds.Deal)
            //{
            //    var dealItem = this.provider.GetCurrent<Deal>();
            //    if (dealItem != null)
            //    {
            //        dealTermAndConditionTitle = dealItem.TermsConditionsTitle;
            //        dealTermAndConditionDesc = dealItem.TermsConditionsContent;
            //        var genericTerm = Context.QuerySingle<GenericTermCondition>(PathMapper.Get(Paths.GenericTermConditionPath));
            //        if (genericTerm != null && dealItem.IsUsingGenericTerm)
            //        {
            //            dealTermAndConditionTitle = genericTerm.TermConditionTitle;
            //            dealTermAndConditionDesc = genericTerm.TermConditionDescription;
            //        }
            //    }
            //}
            
            ViewBag.GenericTermConditionTitle = dealTermAndConditionTitle;
            ViewBag.GenericTermConditionDesc = dealTermAndConditionDesc;
            //Model.DealPageId = currentItem.ID.ToString();
            //var websiteConfig = this.configFactory.CreateWebsiteConfig();
            //Model.EnableToShowRate = websiteConfig.EnableToShowRate;

            if (site.Name.ToLower() == "oasia")
            {
                return View($"{ViewsPath.Hospitality_Oasia_PAGES_PATH}/HBGDealParticipantsContainerBlock/Index.cshtml", Model);
            }
            else if (site.Name.ToLower() == "rendezvous")
            {
                return View($"{ViewsPath.Hospitality_Rendezvous_BLOCKS_PATH}/HBGDealParticipantsContainerBlock/Index.cshtml", Model);
            }
            else
            {
                return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGDealParticipantsContainerBlock/Index.cshtml", Model);
            }
        }
    }
}
