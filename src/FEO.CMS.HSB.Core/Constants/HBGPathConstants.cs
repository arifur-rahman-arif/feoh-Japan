namespace FEO.CMS.HBG.Core.Constants
{
    public struct HBGPathConstants
    {
        public const string Root = "/sitecore";
        public const string Content = Root + "/content";
        public const string StayFarEast = Content + "/StayFarEast";
        public const string Village = Content + "/Village";
        public const string Outpost = Content + "/Outpost";
        public const string Oasia = Content + "/Oasia";
        public const string RendezvousNew = Content + "/RendezvousNew";
        public const string Quincy = Content + "/Quincy";
        public const string StayFarEastHome = StayFarEast + "/Home";
        public const string VillageHome = Village + "/Home";
        public const string VillageShared = Village + "/Shared";
        public const string OasiaShared = Oasia + "/Shared";
        public const string RendezvousNewShared = RendezvousNew + "/Shared";
        public const string QuincyShared = Quincy + "/Shared";
        public const string StayFarEastHotels = StayFarEastHome + "/Hotels";
        public const string StayFarEastResidences = StayFarEastHome + "/Serviced Residences";
        public const string StayFarEastStaycations = StayFarEastHome + "/Staycations";
        public const string StayFarEastBrands = StayFarEastHome + "/Brands";
        public const string StayFarEastExperience = StayFarEastHome + "/Stay Far East Experience";
        public const string StayFarEastDeals = StayFarEastHome + "/Deals";
        public const string StayFarEastShared = StayFarEast + "/Shared";
        public const string StayFarEastNavigation = StayFarEastShared + "/Navigation";
        public const string StayFarEastComponents = StayFarEastShared + "/Components";
        public const string StayFarEastContacts = StayFarEastShared + "/Contacts";
        public const string StayFarEastColumnSpanSizes = StayFarEastShared + "/Column Span Sizes";
        public const string StayFarEastCurrencies = StayFarEastShared + "/Currencies";
        public const string StayFarEastCountries = StayFarEastShared + "/Countries";
        public const string StayFarEastLanguages = StayFarEastShared + "/Languages";
        public const string StayFarEastNumberOfChildren = StayFarEastShared + "/Number Of Children";
        public const string StayFarEastNumberOfGuests = StayFarEastShared + "/Number Of Guests";
        public const string StayFarEastNumberOfRooms = StayFarEastShared + "/Number Of Rooms";
        public const string StayFarEastPOIIcons = StayFarEastShared + "/POI Icons";
        public const string StayFarEastTravelReasons = StayFarEastShared + "/Reasons For Travel";
        public const string StayFarEastProperties = StayFarEastShared + "/Properties";
        public const string StayFarEastRewardLinks = StayFarEastShared + "/Reward Links";
        public const string StayFarEastServices = StayFarEastShared + "/Services";
        public const string StayFarEastSizes = StayFarEastShared + "/Sizes";
        public const string StayFarEastConfig = StayFarEastShared + "/Config";
        public const string StayFarEastBookingEngines = StayFarEastConfig + "/Booking Engines";
        public const string StayFarEastCssClasses = StayFarEastConfig + "/CSS Classes";
        public const string StayFarEastCssBackgroundColors = StayFarEastCssClasses + "/Background Colors";
        public const string StayFarEastListingTypes = StayFarEastConfig + "/Listing Types";
        public const string StayFarEastArticleCategories = StayFarEastConfig + "/Article Categories";
        public const string StayFarEastDealCategories = StayFarEastConfig + "/Deal Categories";
        public const string StayFarEastDividerColors = StayFarEastConfig + "/Divider Colors";
        public const string StayFarEastTextColors = StayFarEastConfig + "/Text Colors";
        public const string StayFarEastThemes = StayFarEastConfig + "/Themes";
        public const string StayFarEastLayoutOptions = StayFarEastShared + "/LayoutOptions";
        public const string StayfareastSitename = "stayfareast";

        public const string MediaLibrary = Root + "/media library";
        public const string StayFarEastMediaFiles = MediaLibrary + "/StayFarEast";
        public const string StayFarEastImages = StayFarEastMediaFiles + "/Images";
        public const string StayFarEastListingImages = StayFarEastImages + "/Hotels";
        public const string StayFarEastArticleImages = StayFarEastImages + "/Articles";
        public const string StayFarEastSharedImages = StayFarEastImages + "/Shared";

        public const string StayFarEastFiles = StayFarEastMediaFiles + "/Files";
        public const string StayFarEastListingFiles = StayFarEastFiles + "/Hotels";
        public const string StayFarEastPressAndMedia = StayFarEastHome + "/Press and Media";
        public const string StayFarEastMediaMention = StayFarEastPressAndMedia + "/media mention";

        public const string System = Root + "/system";
        public const string Languages = System + "/languages";

        public const string OasiaExperiences = StayFarEastHome + "/Experiences";
        public const string OasiaOurLocations = StayFarEastHome + "/Our Locations";
        public const string OasiaRequestQuotation = StayFarEastHome + "/Request Quotation";
        public const string OasiaMeetings = StayFarEastHome + "/Meetings";
        public const string OasiaWeddings = StayFarEastHome + "/Weddings";
        public const string OasiaCapacity = OasiaMeetings + "/Capacity";
        public const string VillageRequestQuotation = VillageHome + "/Request Quotation";
        public const string SiteBookingConfig = "/Shared/Config/Site/BookingConfig";
        //====relative path=====
        // TemplateIds.SiteTemplate
        public const string RelativeRoot = "query:./ancestor::*[@@templateid='{4253FE15-B33D-4F78-AAE0-08A0D9AEE709}']";
        public const string RelativeHome = RelativeRoot + "/Home";
        public const string RelativeExperiences = RelativeHome + "/Experiences";
        public const string RelativeHotels = RelativeHome + "/Hotels";
        public const string RelativeResidences = RelativeHome + "/Serviced Residences";
        public const string RelativeBrands = RelativeHome + "/Brands";
        public const string RelativePartnerBrands = RelativeHome + "/Partner Brands";
        public const string RelativeAffiliateBrands = RelativeHome + "/Affiliate Brands";
        public const string RelativeExperience = RelativeHome + "/Stay Far East Experience";
        public const string RelativeDeals = RelativeHome + "/Deals";
        public const string RelativeShared = RelativeRoot + "/Shared";
        public const string RelativeNavigation = RelativeShared + "/Navigation";
        public const string RelativeComponents = RelativeShared + "/Components";
        public const string RelativeContacts = RelativeShared + "/Contacts";
        public const string RelativeColumnSpanSizes = RelativeShared + "/Column Span Sizes";
        public const string RelativeCurrencies = RelativeShared + "/Currencies/*";
        public const string RelativeCountries = RelativeShared + "/Countries";
        public const string RelativeCountriesAsterisk = RelativeShared + "/Countries/*";
        public const string RelativeLanguages = RelativeShared + "/Languages";
        public const string RelativeNumberOfChildren = RelativeShared + "/Number Of Children";
        public const string RelativeNumberOfGuests = RelativeShared + "/Number Of Guests";
        public const string RelativeNumberOfRooms = RelativeShared + "/Number Of Rooms";
        public const string RelativePOIIcons = RelativeShared + "/POI Icons/*";
        public const string RelativeTravelReasons = RelativeShared + "/Reasons For Travel";
        public const string RelativeRewardLinks = RelativeShared + "/Reward Links";
        public const string RelativeServices = RelativeShared + "/Services";
        public const string RelativeSizes = RelativeShared + "/Sizes";
        public const string RelativeConfig = RelativeShared + "/Config";
        public const string RelativeBookingEngines = RelativeConfig + "/Booking Engines";
        public const string RelativeCssClasses = RelativeConfig + "/CSS Classes";
        public const string RelativeCssBackgroundColors = RelativeCssClasses + "/Background Colors";
        public const string RelativeListingTypes = RelativeConfig + "/Listing Types/*";
        public const string RelativeArticleCategories = RelativeConfig + "/Article Categories/*";
        public const string RelativeDealCategories = RelativeConfig + "/Deal Categories/*";
        public const string RelativeDividerColors = RelativeConfig + "/Divider Colors";
        public const string RelativeTextColors = RelativeConfig + "/Text Colors";
        public const string RelativeThemes = RelativeConfig + "/Themes";
        public const string RelativeMeetings = RelativeHome + "/Meetings";
        public const string RelativeCapacitys = RelativeMeetings + "/Capacitys";


        #region Rendezvous Site
        public const string RendezvousHome = "/Home";
        public const string RendezvousNavigation = "/Shared/Navigation";
        public const string RendezvousLanguages = "/Shared/Languages";
        public const string HeaderNavigation = "/Shared/Navigation/HeaderNav";
        public const string RendezvousListingTemplateID = "{4580E0BC-9A32-429D-B743-360C678B3718}";
        public const string RendezvousListingTemplateQuery = "ancestor-or-self::*[@@templateid='{4580E0BC-9A32-429D-B743-360C678B3718}']";
        public const string RendezvousGTMItemPath = "/Shared/GoogleTagManager/GTMScript";
        public const string SentosaPrecinctGTMItemPath = "/Shared/SentosaPrecinct/GoogleTagManager/GTMScript";
        public const string RelativeHomeItemRootPath = "./ancestor::*[@@templateid='{4253FE15-B33D-4F78-AAE0-08A0D9AEE709}']";
        #endregion
        #region Village Site
        public const string VillageCssClasses = "/sitecore/content/Village/Shared/Config/CSS Classes";
        public const string VillageHomeItem = "/sitecore/content/Village/Home";
        public const string VillageGTMItemPath = "/Shared/GoogleTagManager/GTMScript";
        #endregion

        #region Sentosa Site
        public const string SentosaLanguages = "/Shared/SentosaPrecinct/Languages";
        public const string SentosaPrecinct = StayFarEast + "/SentosaPrecinct";
        public const string SentosaPrecinctHotel = SentosaPrecinct + "/Hotels";
        #endregion

        #region Outpost Site
        public const string OutpostLanguages = "/Shared/Languages";
        public const string OutpostSitename = "outpost_website";
        #endregion


        public const string InsidersConfigurationPath = RelativeConfig + "/InsidersConfiguration";
        public const string GenericTermConditionPath = RelativeConfig + "/Generic Term And Condition";
        public const string VenueHighlightConfigurationPath = RelativeConfig + "/Venue Highlight Configuration";
        public const string InsidersPrivacyPolicyText = "Shared/Config/UpdateProfileConfigurations/EmailPreferencePrivacyPolicyText";
        public const string PersonalInfoPrefixDropdown = "Shared/Config/PersonalInfoPrefixDropdown";

        //Generic Popup For SiteWide Path
        public const string GenericPopupSiteWidePath = "/Shared/Config/SiteWideGenericPopup";

        #region Sitecore Room Amenities Query
        public const string SharedRoomAmenitiesPath = RelativeShared + "/Room Amenities";
        public const string SharedServicesPath = RelativeShared + "/Services";
        #endregion

        public const string SharedHotelAmenitiesPath = RelativeShared + "/Hotel Amenities";
        public const string SharedParticipatingPropertiesListing = "/Participating Properties Listing";
        public const string SharedRoomsContainerPath = "/Rooms Listing";
        public const string SharedApartmentContainerPath = "/Apartments Listing";
        public const string SharedBrandListingPath = "/Property Filters/Brand Filter";
        public const string SharedSortByPath = RelativeShared + "/Property Filters/Sort By";
        public const string SharedDistancePath = RelativeShared + "/Property Filters/Distances";
        public const string SharedSequenceFilterPath = RelativeShared + "/Property Filters/Sequence Filter";
        public const string ShareEnquireMonthlyRateForm = StayFarEastComponents + "/Enquire Monthly Rate Form";
        public const string EnquireMonthlyRateForm = "/Enquire Monthly Rate Form";
        public const string DealHighlightContainerPath = "/Shared/Components/Deal Highlight";

        #region
        public const string SharedMeetingCapacityPath = RelativeShared + "/Events/Mettings/Capacity";
        public const string SharedMeetingRoomSettingPath = RelativeShared + "/Events/Mettings/Room Settings";
        public const string SharedWeddingCapacityPath = RelativeShared + "/Events/Weddings/Capacity";
        public const string SharedWeddingRoomSettingPath = RelativeShared + "/Events/Weddings/Room Settings";
        public const string SharedWeddingOccasionPath = RelativeShared + "/Events/Weddings/Occasion";
        #endregion
    }
}
