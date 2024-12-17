using EPiServer.Core.Internal;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGGuestReviewFolderBlockController : BlockComponent<HBGGuestReviewFolderBlock>
    {
        private readonly IContentLoader _contentloader;

        public HBGGuestReviewFolderBlockController(IContentLoader contentLoader )
        {
            _contentloader = contentLoader;
        }
        protected override IViewComponentResult InvokeComponent(HBGGuestReviewFolderBlock currentBlock)
        {
            var guestReviews = _contentloader.GetChildren<HBGGuestReviewItemBlock>(currentBlock.ChildrenFolderReference);
            HBGGuestReviewFolderBlock model = new HBGGuestReviewFolderBlock();
            
                if(guestReviews != null)
                {
                    var sortBy = _contentloader.Get<HBGNameValuePairBlock>(currentBlock.SortBy);
                    if(sortBy != null)
                    {
                        switch (sortBy.ToString())
                        {
                            case Constants.ByDate:
                                guestReviews = guestReviews.OrderByDescending(o => o.DateOfReview).ToList();
                                break;
                            case Constants.ByContentTree:
                                guestReviews = guestReviews.OrderBy(o => o.DisplayOrder).ToList();
                                break;
                            default:
                                guestReviews = guestReviews.OrderByDescending(o => o.DateOfReview).ToList();
                                break;

                        }
                    }
                   
                }
            
            ViewData["GuestReviews"] = guestReviews;
            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGGuestReviewFolderBlock/index.cshtml", model);
        }
    }

}
