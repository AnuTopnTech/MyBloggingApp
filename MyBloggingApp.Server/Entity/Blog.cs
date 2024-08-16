using System.ComponentModel.DataAnnotations.Schema;

namespace MyBloggingApp.Server.Entity
{
    [Table("Blogs")]
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string Content { get; set; } = string.Empty;

        public string? Image { get; set; }

        public bool IsFeatured { get; set; }

        public int CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}
