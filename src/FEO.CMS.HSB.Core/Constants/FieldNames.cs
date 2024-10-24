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
    }
}
