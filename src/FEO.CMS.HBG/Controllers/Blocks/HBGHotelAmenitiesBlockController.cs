using EPiServer.Logging;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.ExtensionMethods;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGHotelAmenitiesBlockController : BlockComponent<HBGHotelAmenitiesBlock>
    {
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(HBGInsidersRibbonBlockController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGHotelAmenitiesBlock currentBlock)
        {
            try
            {
                var rootPageReference = ContentReference.StartPage;
                var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
                var site = contentLoader.Get<HBGSite>(sitePageReference);

                var Model = new HBGHotelAmenityBlock();
                Model = currentBlock.Datasource != null ? contentLoader.Get<HBGHotelAmenityBlock>(currentBlock.Datasource) : Model;
                var sharedHotelAmenities = GetSharedHotelAmenity();
                var listing = BlockHelper.GetCurrentPage<HBGListingPage>();
                if (sharedHotelAmenities.Categories.IsNotNullAndAny())//listing != null && listing.HotelAmenities.Items.IsNotNullAndAny() && 
                {
                    foreach (var category in sharedHotelAmenities.Categories)
                    {
                        category.Items = category.Items;//.Where(x => listing.HotelAmenities.Items.Any(y => y == x.Id));
                    }
                }
                else
                {
                    sharedHotelAmenities = null;
                }
                Model.HotelAmenities = sharedHotelAmenities;

                if (site.Name.ToLower() == "oasia")
                {
                    return View($"{ViewsPath.Hospitality_Oasia_PAGES_PATH}/HBGHotelAmenitiesBlock/Index.cshtml", Model);
                }
                else if (site.Name.ToLower() == "outpost")
                {
                    return View($"{ViewsPath.Hospitality_Outpost_BLOCKS_PATH}/HBGHotelAmenitiesBlock/Index.cshtml", Model);
                }
                else if (site.Name.ToLower() == "village")
                {
                    return View($"{ViewsPath.Hospitality_Village_BLOCKS_PATH}/HBGHotelAmenitiesBlock/Index.cshtml", Model);
                }
                else
                {
                    return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGHotelAmenitiesBlock/Index.cshtml", Model);
                }
            }
            catch (Exception exp)
            {
                logger.Error("Error in HBGHotelAmenitiesBlockController: " + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
        public HotelAmenities GetSharedHotelAmenity()
        {
            try
            {
                var sharedFolder = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, HBGPathConstants.RelativeShared);
                var hotelAmenitiesFolder = contentLoader.GetChildren<IContent>(sharedFolder).OfType<ContentFolder>();
                var getHotelItems = hotelAmenitiesFolder != null ? contentLoader.GetChildren<IContent>(hotelAmenitiesFolder?.FirstOrDefault(block => block.Name.Equals("Hotel Amenities")).ContentLink) : null;
                HotelAmenities hotelAmenities = new HotelAmenities();
                var hotelAmenityList = new List<HBGHotelAmenityCategoryBlock>();

                if (getHotelItems != null)
                {
                    var hotelAmenityCategoryBlock = new HBGHotelAmenityCategoryBlock();
                    foreach (var item in getHotelItems)
                    {
                        if (item.GetOriginalType() == typeof(HBGHotelAmenityCategoryBlock))
                        {
                            hotelAmenityCategoryBlock = contentLoader.Get<HBGHotelAmenityCategoryBlock>(item.ContentLink);
                            var getHotelAmenityCategoryBlockFolder = getHotelItems.Select(block => block).OfType<ContentFolder>();
                            if (getHotelAmenityCategoryBlockFolder != null)
                            {
                                var hotelAmenityItemBlockFolder = getHotelAmenityCategoryBlockFolder.FirstOrDefault(x =>
            x.Name.Equals(item.Name));
                                if (hotelAmenityItemBlockFolder != null)
                                {
                                    hotelAmenityCategoryBlock.Items = contentLoader.GetChildren<HBGHotelAmenityItemBlock>(hotelAmenityItemBlockFolder.ContentLink);
                                }
                            }
                            hotelAmenityList.Add(hotelAmenityCategoryBlock);
                        }
                    }
                    hotelAmenities.Categories = hotelAmenityList;
                    return hotelAmenities;
                }
            }
            catch (Exception exp)
            {
                logger.Error("Error in GetSharedHotelAmenity(): " + exp.InnerException, this);
            }
            return null;
        }
    }
}
