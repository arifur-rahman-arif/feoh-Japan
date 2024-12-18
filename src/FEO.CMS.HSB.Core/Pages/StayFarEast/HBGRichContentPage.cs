using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGRichContentPage", GUID = "B0A0D1F8-2851-4C80-A80C-1DA43EBA26F3", GroupName = "Hospitality")]
    public class HBGRichContentPage : HBGRichContentConfigPage
    {
        [Display(Name = "Main Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Title Content Override", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TitleContentOverride { get; set; }

        [Display(Name = "Form Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string FormTitle { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

        [Display(Name = "Content Header", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual ContentReference ContentHeader { get; set; }

        [Display(Name = "Content Footer", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference ContentFooter { get; set; }

        //RootBlock
        [Display(Name = "Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Summary", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        //ResponseHeaders
        [Display(Name = "Cache Control", GroupName = "Response Header Settings", Order = 300)]
        [CultureSpecific]
        public virtual string CacheControl { get; set; }

        //BookNowValidation
        [Display(Name = "Please Select", GroupName = "Booking Widget Field Validation", Order = 100)]
        [CultureSpecific]
        public virtual string PleaseSelect { get; set; }

        [Display(Name = "Property", GroupName = "Booking Widget Field Validation", Order = 200)]
        [CultureSpecific]
        public virtual string Property1 { get; set; }

        [Display(Name = "Check In Date", GroupName = "Booking Widget Field Validation", Order = 300)]
        [CultureSpecific]
        public virtual string CheckInDate { get; set; }

        [Display(Name = "Check Out Date", GroupName = "Booking Widget Field Validation", Order = 400)]
        [CultureSpecific]
        public virtual string CheckOutDate { get; set; }
    }
}
