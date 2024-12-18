using Microsoft.AspNetCore.Authentication;
using EPiServer.Web;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Constants;
using Microsoft.Extensions.Caching.Memory;

namespace FEO.CMS.HBG.Business.Forms
{
    public class FormAuthentication
    {
        public static void ValidateAuthentication(HttpContext HttpContext, IMemoryCache MemoryCache)
        {
            var contextMode = ServiceLocator.Current.GetInstance<IContextModeResolver>().CurrentMode;
            var session = HttpContext?.Session;

            if (contextMode != ContextMode.Edit && contextMode != ContextMode.Preview)
            {
                if (HttpContextHelper.IsAuthenticated(HttpContext) && session?.GetString(FieldNames.InsidersFieldName.SessionEmail) == null)
                {
                    SignOutUser(HttpContext);
                    session.Clear();
                }
                if (session?.GetString(FieldNames.InsidersFieldName.SessionEmail) != null)
                {
                    string cacheKey = session?.GetString(FieldNames.InsidersFieldName.SessionEmail)?.ToString();
                    if (GetCache<string>(cacheKey, MemoryCache) != session?.Id)
                    {
                        SignOutUser(HttpContext);
                        session.Clear();
                    }
                }
            }
        }
        private static T GetCache<T>(string key, IMemoryCache memoryCache)
        {
            memoryCache.TryGetValue(key, out T value);
            return value;
        }

        private static void SignOutUser(HttpContext context)
        {
            context.SignOutAsync();
            context.Session.Clear();
        }
        public static class HttpContextHelper
        {
            public static bool IsAuthenticated(HttpContext httpContext) =>
                httpContext?.User?.Identity?.IsAuthenticated ?? false;

            public static bool HasSession(HttpContext httpContext) =>
                httpContext?.Session != null;
        }

        //public static void RegenerateSessionId(string email)
        //{

        //    // Initialise variables for regenerating the session id
        //    HttpContext Context = HttpContext.Current;
        //    SessionIDManager manager = new SessionIDManager();
        //    string oldId = manager.GetSessionID(Context);
        //    string newId = manager.CreateSessionID(Context);
        //    bool isAdd = false, isRedir = false;

        //    // Save a new session ID
        //    manager.SaveSessionID(Context, newId, out isRedir, out isAdd);

        //    // Get the fields using the below and create variables for storage
        //    HttpApplication ctx = HttpContext.Current.ApplicationInstance;
        //    HttpModuleCollection mods = ctx.Modules;
        //    SessionStateModule ssm = (SessionStateModule)mods.Get("Session");
        //    FieldInfo[] fields = ssm.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
        //    SessionStateStoreProviderBase store = null;
        //    FieldInfo rqIdField = null, rqLockIdField = null, rqStateNotFoundField = null;
        //    SessionStateStoreData rqItem = null;

        //    // Assign to each variable the appropriate field values
        //    foreach (FieldInfo field in fields)
        //    {
        //        if (field.Name.Equals("_store")) store = (SessionStateStoreProviderBase)field.GetValue(ssm);
        //        if (field.Name.Equals("_rqId")) rqIdField = field;
        //        if (field.Name.Equals("_rqLockId")) rqLockIdField = field;
        //        if (field.Name.Equals("_rqSessionStateNotFound")) rqStateNotFoundField = field;
        //        if (field.Name.Equals("_rqItem")) rqItem = (SessionStateStoreData)field.GetValue(ssm);
        //    }

        //    // Remove the previous session value
        //    object lockId = rqLockIdField.GetValue(ssm);
        //    if ((lockId != null) && (oldId != null))
        //        store.RemoveItem(Context, oldId, lockId, rqItem);

        //    rqStateNotFoundField.SetValue(ssm, true);
        //    rqIdField.SetValue(ssm, newId);

        //    TimeSpan TimeOut = new TimeSpan(0, 0, HttpContext.Current.Session.Timeout, 0, 0);
        //    HttpContext.Current.Cache.Insert(email,
        //                newId,
        //                null,
        //                DateTime.MaxValue,
        //                TimeOut,
        //                System.Web.Caching.CacheItemPriority.NotRemovable,
        //                null);
        //}
    }
}
