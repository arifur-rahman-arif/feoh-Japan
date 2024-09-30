using EPiServer.Cms.Shell;
using EPiServer.Cms.UI.AspNetIdentity;
using EPiServer.Find;
using EPiServer.Globalization;
using EPiServer.Scheduler;
using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using FEO.CMS.HSB;

namespace FEO.CMS.HBG
{
    public class Startup
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private readonly IConfiguration _configuration;

        public Startup(IWebHostEnvironment webHostingEnvironment, IConfiguration configuration)
        {
            _webHostingEnvironment = webHostingEnvironment;
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            if (_webHostingEnvironment.IsDevelopment())
            {
                AppDomain.CurrentDomain.SetData("DataDirectory", Path.Combine(_webHostingEnvironment.ContentRootPath, "App_Data"));
                services.Configure<SchedulerOptions>(options => options.Enabled = false);
            }

            services.AddBootstrapHSBServices();

            services
                .AddCmsAspNetIdentity<ApplicationUser>()
                .AddCms()
                .AddAdminUserRegistration()
                .AddEmbeddedLocalization<Startup>();
            services.AddPostCmsHSBServices(_webHostingEnvironment, _configuration);
            services.Configure<FindOptions>(_configuration.GetSection("Find"));
            services.AddFind();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors();

            // Middleware to handle 404 errors
            app.UseStatusCodePages(async context =>
            {
                if (context.HttpContext.Response.StatusCode == 404)
                {
                    string lang = "/" + ContentLanguage.PreferredCulture.Name;
                    context.HttpContext.Response.Redirect(lang + "/page-not-found/");
                }
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapContent();
            });
        }
    }
}
