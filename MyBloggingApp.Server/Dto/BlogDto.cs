namespace MyBloggingApp.Server.Dto
{
    public class BlogDto
    {
        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string Content { get; set; } = string.Empty;

        public string? Image { get; set; }

        public bool IsFeatured { get; set; }

        public int CategoryId { get; set; }
    }
}
