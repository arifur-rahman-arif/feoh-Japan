namespace FEO.CMS.HBG.Core.Constants
{
    public struct FieldNames
    {
        public struct ItemRedirectionFieldNames
        {
            public const string ItemPath = "ItemPath";
            public const string RedirectToItem = "RedirectToItem";
            public const string RedirectToUrl = "RedirectToUrl";

        }
        public struct InsidersFieldName
        {
            public const string SessionEmail = "Email";
            public const string SessionUserID = "UserID";
            public const string UserIsCustLoyalty = "UserIsCustLoyalty";
            public const string UserSignupDate = "UserSignupDate";
            public const string UserEffectiveDate = "EffectiveDate";
            public const string UserExpireDate = "UserExpireDate";
            public const string Password = "Password";
            public const string Prefix = "Prefix";
            public const string FirstName = "FirstName";
            public const string Token = "Token";
            public const string CrmId = "Crmid";
            public const string LastName = "LastName";
            public const string Country = "Country";
            public const string Address = "Address";
            public const string Birthday = "Birthday";
            public const string NewPassword = "NewPassword";
            public const string AmexCardNumber = "AcardNumber";
            public const string AmexCardType = "AX";
            public const string AmexCardHolderName = "AcardHolderName";
            public const string AmexCardExpiryDate = "AexpiryDate";

            public const string DiscoverCardNumber = "DcardNumber";
            public const string DiscoverCardType = "DS";
            public const string DiscoverCardHolderName = "DcardHolderName";
            public const string DiscoverCardExpiryDate = "DexpiryDate";

            public const string VisaCardNumber = "VcardNumber";
            public const string VisaCardType = "VI";
            public const string VisaCardHolderName = "VcardHolderName";
            public const string VisaCardExpiryDate = "VexpiryDate";

            public const string MasterCardNumber = "McardNumber";
            public const string MasterCardType = "MC";
            public const string MasterCardHolderName = "McardHolderName";
            public const string MasterCardExpiryDate = "MexpiryDate";


            public const string SubscribeCheckbox = "subscribe";
            public const string SfmcToken = "SfmcToken";

            public const string GRecaptchaToken = "GRecaptchaToken";

        }
        public struct SFMCConstants
        {
            public const string SFMCHeaderContentType = "Content-Type";
            public const string SFMCHeaderContentTypeValue = "application/json";
            public const string SFMCHeaderAuthorisation = "Authorization";
        }
        public struct ItemIds
        {
            public static Guid StatsBlade = new Guid("{4F804FEA-545E-4A37-A37D-C272B2FE2B18}");
            //Blog filter options folder
            public static Guid ArticleTypes = new Guid("{9E5DE9F5-14C8-4D3E-9B06-C60324E208C9}");
            public static Guid OrderBy = new Guid("{58E47641-F54D-40F2-90ED-10DBB83FC8B5}");
            public static Guid Purposes = new Guid("{963B005D-9BC7-4782-AB0A-41EA4D69FCFD}");
            public static Guid Seasons = new Guid("{F5B72115-C25F-4596-AAC7-44D8C77865BD}");
            public static Guid Countries = new Guid("{96AC74CF-489D-42FE-98DA-55BEF197423F}");
           
        }
    }
    }
}
