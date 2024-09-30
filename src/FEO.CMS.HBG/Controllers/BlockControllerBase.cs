using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks;
using System.Web;

namespace FEO.CMS.RBG.Controllers
{
    public abstract class BlockControllerBase<T> : BlockComponent<T> where T : HBGBaseBlock
    {
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

    }
}
