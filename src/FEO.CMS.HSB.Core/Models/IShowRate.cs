namespace FEO.CMS.HBG.Core.Models
{
    public interface IShowRate
    {
        bool EnableToShowRate { get; set; }
        string Currency { get; set; }
        string BookingUrl { get; set; }
    }
}
