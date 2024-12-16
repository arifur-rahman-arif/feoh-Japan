using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGArticleGridBlock", GUID = "A1363004-A383-4458-8A3B-2A08EB9BBA41", GroupName = "Hospitality")]
    public class HBGArticleGridBlock : HBGBaseBlock
    {
        [Display(Name = "Articles List", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea ArticlesList { get; set; }

    }
}
