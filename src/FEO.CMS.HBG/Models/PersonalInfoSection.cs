namespace FEO.CMS.HBG.Models
{
    public class PersonalInfoSection
    {
        public virtual string Email { get; set; }
        public virtual string Prefix { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual string BirthDay { get; set; }
        public virtual string Country { get; set; }
        public virtual string Address { get; set; }
        public virtual string SubscribeForEmail { get; set; }
        public virtual string crmID { get; set; }
        public virtual string SignupDate { get; set; }
        public virtual string EffectiveDate { get; set; }
        public virtual string ExpireDate { get; set; }
        public virtual bool IsCustLoyalty { get; set; }
    }
}
