using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core
{
    public class Globals
    {
        [GroupDefinitions]
        public static class GroupNames 
        {
            [Display(Name = "Images", Order = 10)]
            public const string Images = "Images";
        }
    }
}
