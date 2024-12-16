using EPiServer.Logging;
using EPiServer.ServiceLocation;
using EPiServer.Shell.Security;
using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Business;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;
using System.Web;

namespace FEO.CMS.HBG.Controllers
{
    /// <summary>
    /// All controllers that renders pages should inherit from this class so that we can
    /// apply action filters, such as for output caching site wide, should we want to.
    /// </summary>
    public abstract class PageControllerBase<T> : PageController<T>, IModifyLayout
        where T : HBGBasePage
    {
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(PageControllerBase<T>));
        protected readonly Injected<UISignInManager> UISignInManager;

        /// <summary>
        /// Signs out the current user and redirects to the Index action of the same controller.
        /// </summary>
        /// <remarks>
        /// There's a log out link in the footer which should redirect the user to the same page.
        /// As we don't have a specific user/account/login controller but rely on the login URL for
        /// forms authentication for login functionality we add an action for logging out to all
        /// controllers inheriting from this class.
        /// </remarks>
        public async Task<IActionResult> Logout()
        {
            await UISignInManager.Service.SignOutAsync();
            return Redirect(HttpContext.RequestServices.GetService<UrlResolver>().GetUrl(PageContext.ContentLink, PageContext.LanguageID));
        }

        public virtual void ModifyLayout(LayoutModel layoutModel)
        {
            if (PageContext.Page is HBGBasePage page)
            {
                //layoutModel.HideHeader = page.HideSiteHeader;
                //layoutModel.HideFooter = page.HideSiteFooter;
                //layoutModel.HideOnBreadcrumb = page.NotShowOnBreadcrumb;
            }
        }

        #region Cookies
        protected bool AddCookie(string key, string value, DateTime? expiryDate = null)
        {
            try
            {
                if (Request.Cookies[key] != null)
                {
                    var httpCookie = HttpContext.Request.Cookies[key];

                    if (httpCookie != null)
                    {
                        var cookieOptions = new CookieOptions
                        {
                            Expires = expiryDate ?? DateTime.Now.AddDays(180),
                            HttpOnly = true,
                            Secure = true
                        };
                        HttpContext.Response.Cookies.Append(key, HttpUtility.UrlDecode(value), cookieOptions);
                    }
                }
                else
                {
                    var cookieOptions = new CookieOptions
                    {
                        Expires = expiryDate ?? DateTime.Now.AddDays(180),
                        HttpOnly = true,
                        Secure = true
                    };
                    HttpContext.Response.Cookies.Append(key, HttpUtility.UrlDecode(value), cookieOptions);
                }

                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }

        protected string GetCookie(string key)
        {
            try
            {
                if (Request.Cookies[key] != null)
                {
                    return Request.Cookies[key].ToString();
                }
                return string.Empty;
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }

        protected bool HasCookie(string key)
        {
            try
            {
                return Request.Cookies[key] != null;
            }
            catch (Exception)
            {
                return false;
            }
        }

        #endregion Cookies

        #region Settings
        public HBGWebsiteConfigBlock CreateWebsiteConfig(HBGSite site)
        {
            try
            {
                var websiteConfigPath = HBGPathConstants.RelativeConfig.Replace("StayFarEast", site.Name.ToString()) + "/Site/" + TemplateNames.WebsiteConfig;
                if (string.IsNullOrWhiteSpace(websiteConfigPath))
                    return null;

                var getWebsiteConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, websiteConfigPath);
                var websiteConfig = getWebsiteConfig != null ? contentLoader.Get<HBGWebsiteConfigBlock>(getWebsiteConfig) : null;
                return websiteConfig;
            }
            catch (Exception exp)
            {
                logger.Error("Error in CreateWebsiteConfig(): " + exp.InnerException, this);
                return null;
            }
        }
        public HBGListingConfigBlock CreateListingConfig(HBGSite site)
        {
            try
            {
                var listingConfigPath = HBGPathConstants.RelativeConfig.Replace("StayFarEast", site.Name.ToString()) + "/Site/" + TemplateNames.ListingConfig;
                if (string.IsNullOrWhiteSpace(listingConfigPath))
                    return null;

                var getListingConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, listingConfigPath);
                var listingConfig = getListingConfig != null ? contentLoader.Get<HBGListingConfigBlock>(getListingConfig) : null;
                return listingConfig;
            }
            catch (Exception exp)
            {
                logger.Error("Error in CreateListingConfig(): " + exp.InnerException, this);
                return null;
            }
        }
        public HBGBookingConfigBlock CreateBookingConfig(HBGSite site)
        {
            try
            {
                var bookingConfigPath = HBGPathConstants.RelativeConfig.Replace("StayFarEast", site.Name.ToString()) + "/Site/" + TemplateNames.BookingConfig;
                if (string.IsNullOrWhiteSpace(bookingConfigPath))
                    return null;

                var getBookingConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, bookingConfigPath);
                var bookingConfig = getBookingConfig != null ? contentLoader.Get<HBGBookingConfigBlock>(getBookingConfig) : null;
                return bookingConfig;
            }
            catch (Exception exp)
            {
                logger.Error("Error in CreateBookingConfig(): " + exp.InnerException, this);
                return null;
            }
        }
        #endregion
    }
}
