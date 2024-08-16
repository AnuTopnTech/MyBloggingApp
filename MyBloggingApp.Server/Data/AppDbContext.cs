
using Microsoft.EntityFrameworkCore;
using MyBloggingApp.Server.Entity;

namespace MyBloggingApp.Server.Data
{
    public class AppDbContext: DbContext
    {
        public  AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { 
           
        }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User>Users { get; set; }

    }
}
