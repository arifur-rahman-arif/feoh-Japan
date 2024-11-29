namespace FEO.CMS.HBG.Core.Models
{
    public class Faq
    {
        public string Context => "https://schema.org";
        public string Type => "FAQPage";
        public List<MainEntity> MainEntity { get; set; }
    }

    public class MainEntity
    {
        public string Type => "Question";
        public string Name { get; set; }
        public Answer Answer { get; set; }
    }

    public class Answer
    {
        public string Type => "Answer";
        public string Text { get; set; }
    }
}
