using EPiServer.AddOns.Helpers;
using EPiServer.Core.Internal;
using EPiServer.Logging;
using EPiServer.ServiceLocation;
using EPiServer.Shell;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGDestinationsBlockController : BlockComponent<HBGDestinationsBlock>
    {
        private static readonly EPiServer.Logging.ILogger Log = LogManager.GetLogger(MethodBase.GetCurrentMethod()?.DeclaringType);
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGDestinationsBlock currentContent)
        {
            try
            {
                IEnumerable<HBGListingPage> list = GetSFEProperties();
                //currentContent.StayFarEastCitiesWithPropertyInfo = GetCitiesWithPropertyInfo(list);
                //currentContent.StayFarEastMapItems = GetCountries(list);

                return View("/Views/FarEastHospitality/StayFarEast/Blocks/HBGDestinationsBlock/Index.cshtml", currentContent);
            }
            catch (Exception exp)
            {
                Log.Error("Error in StayFarEast Destinations" + exp.InnerException, this);
            }
            return null;
        }

        public IEnumerable<HBGListingPage> GetSFEProperties()
        {
            var HBGListingPages = contentLoader.GetDescendents(ContentReference.StartPage)
                    .Select(page => contentLoader.Get<IContent>(page))
                    .OfType<HBGListingPage>();
            return HBGListingPages;
        }
        //private List<HBGListingPage> GetCitiesWithPropertyInfo(IEnumerable<HBGListingPage> list)
        //{
        //    try
        //    {
        //        return list.Where(x => x?.City != null && x?.Country != null).GroupBy(p => p.City.GetContentGuid(), (key, group) => new HBGListingPage()
        //        {
        //            CityName = group?.FirstOrDefault()?.City?.Title,
        //            CityScName = group?.FirstOrDefault()?.City?.Name,
        //            Description = group?.FirstOrDefault()?.City?.Description,
        //            ThumbnailSrc = group?.FirstOrDefault()?.City?.Thumbnail?.GetMediaUrlWithProtectHash(),
        //            CountryName = group?.FirstOrDefault()?.Country?.Title,
        //            CountryIsoCode = group?.FirstOrDefault()?.Country?.IsoCode,
        //            CityScId = key,
        //            CountryScId = group.FirstOrDefault().Country.Id,
        //            NoOfPropertiesInCity = group.Count(),
        //            CityRank = group?.FirstOrDefault()?.City?.SortOrder != "" ? Convert.ToInt32(group?.FirstOrDefault()?.City?.SortOrder) : 0,
        //            Coordinates = new double[2] { Convert.ToDouble(group?.FirstOrDefault()?.City?.Longitude), Convert.ToDouble(group?.FirstOrDefault()?.City?.Latitude) }
        //        }).OrderBy(x => x.CityRank == 0).ThenBy(x => x.CityRank).ToList();
        //    }
        //    catch (Exception e)
        //    {
        //        throw e;
        //    }
        //}
        //private List<StayFarEastMapItem> GetCountries(IEnumerable<HBGListingPage> list)
        //{
        //    try
        //    {
        //        var lsg = list.Where(x => x?.Country != null && x?.City != null).GroupBy(p => p.Country.Id, (key, group) => new
        //        {
        //            CountryScId = key,
        //            Name = group?.FirstOrDefault()?.Country?.Title,
        //            CountryIsoCode = group?.FirstOrDefault()?.Country?.IsoCode,
        //            Longitude = group?.FirstOrDefault()?.Country?.Longitude,
        //            Latitude = group?.FirstOrDefault()?.Country?.Latitude,
        //            NoOfCitiesInCountry = group.Select(x => x.City.Id).Distinct().Count(),
        //            NoOfPropertiesInCountry = group.Count(),
        //            CityName = group.Select(x => x.City.Id).Distinct().Count() == 1 ? group?.FirstOrDefault()?.City?.Title : string.Empty//if only 1 city in country then take city name else leave
        //        });

        //        return lsg.Where(x => !string.IsNullOrWhiteSpace(x.Longitude) && !string.IsNullOrWhiteSpace(x.Latitude)).Select(x => new StayFarEastMapItem()
        //        {
        //            StayFarEastGeometry = new StayFarEastGeometry() { Coordinates = new double[2] { Convert.ToDouble(x.Longitude), Convert.ToDouble(x.Latitude) } },
        //            StayFarEastCountry = new StayFarEastCountry()
        //            {
        //                Name = x?.Name,
        //                CountryScId = x.CountryScId,
        //                NoOfCitiesInCountry = x.NoOfCitiesInCountry,
        //                NoOfPropertiesInCountry = x.NoOfPropertiesInCountry,
        //                CityName = x.CityName,
        //                CountryIsoCode = x.CountryIsoCode,
        //            }
        //        }).ToList();
        //    }
        //    catch (Exception e)
        //    {
        //        throw e;
        //    }
        //}
    }
}
