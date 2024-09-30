using EPiServer.Core;

namespace FEO.CMS.HBG.Core.Models
{
    public class LayoutModel
    {
        public ContentArea Header { get; set; }
        public ContentArea Footer { get; set; }
        public bool HideHeader { get; set; }
        public bool HideFooter { get; set; }
        public bool HideBreadcrumb { get; set; }
        public bool ShowInBreadcrumb { get; set; }
    }
}
