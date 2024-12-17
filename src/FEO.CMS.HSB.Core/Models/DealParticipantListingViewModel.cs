namespace FEO.CMS.HBG.Core.Models
{
    public class DealParticipantListingViewModel : IShowRate
    {
        //public IEnumerable<DealParticipant> Participants;
        public string CTAText;
        //public DealParticipantConfig Dealparticipantconfig;
        public bool Istestenabled;
        //public IGoalConfig GoalConfigParameters;
        public string CheckAvailabilty;
        //public IEnumerable<Country> Countries { get; set; }
        public string DealPageId { get; set; }
        public string ViewMoreInclusionText { get; set; }
        public string LearnMoreText { get; set; }
        public string ViewMoreText { get; set; }
        //public IParticipatingPropertiesListing ListingConfig { get; set; }
        public bool EnableToShowRate { get; set; }
        public string Currency { get; set; }
        public string BookingUrl { get; set; }
    }
}
