using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGArticlesPage", GUID = "18BB1413-69A2-4CBE-9CB1-8DD3FB4CA30E", GroupName = "Hospitality")]
    public class HBGArticlesPage : HBGBasePage
    {
        [Display(Name = "Date", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual DateTime Date { get; set; }

    }
}
