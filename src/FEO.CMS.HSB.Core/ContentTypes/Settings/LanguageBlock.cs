using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.ContentTypes.Settings
{
    [ContentType(DisplayName = "Language", GUID = "F68F13A6-3395-426A-B9A1-FA2DC60D94EB", GroupName = "Settings")]
    public class LanguageBlock : BlockData
    {
        [Display(Name = "Charset", GroupName = "Data", Order =100)]
        [CultureSpecific]
        public virtual string Charset { get; set; }

        [Display(Name = "Code page", GroupName = "Data", Order =200)]
        [CultureSpecific]
        public virtual string Codepage { get; set; }

        [Display(Name = "Dictionary", GroupName = "Data", Order =300)]
        [CultureSpecific]
        public virtual string Dictionary { get; set; }

        [Display(Name = "Encoding", GroupName = "Data", Order =400)]
        [CultureSpecific]
        public virtual string Encoding { get; set; }

        [Display(Name = "Fallback Language", GroupName = "Data", Order =450)]
        [CultureSpecific]
        public virtual string FallbackLanguage { get; set; }

        [Display(Name = "Iso", GroupName = "Data", Order =500)]
        [CultureSpecific]
        public virtual string Iso { get; set; }

        [Display(Name = "Regional Iso Code", GroupName = "Data", Order =600)]
        [CultureSpecific]
        public virtual string RegionalIsoCode { get; set; }

        [Display(Name = "World Lingo Language Identifier", GroupName = "Data", Order =700)]
        [CultureSpecific]
        public virtual string WorldLingoLanguageIdentifier { get; set; }
    }
}
