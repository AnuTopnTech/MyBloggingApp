
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace MyBloggingApp.Server.Data.Repository
{
    public class SqlRepository<T> : IRepository<T> where T : class
    {
        private readonly AppDbContext dbContext;
        public SqlRepository(AppDbContext dbContext) {
          this.dbContext = dbContext;
        }
        public async Task AddAsync(T entity)
        {
            await dbContext.Set<T>().AddAsync(entity);
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await dbContext.Set<T>().FindAsync(id);
#pragma warning disable CS8604 // Possible null reference argument.
            dbContext.Set<T>().Remove(entity);
#pragma warning restore CS8604 // Possible null reference argument.
        }

        public async Task<List<T>> GetAll()
        {
            return await dbContext.Set<T>().ToListAsync();
        }

        public async Task<List<T>> GetAll(Expression<Func<T, bool>> filter)
        {
            return await dbContext.Set<T>().Where(filter).ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await dbContext.Set<T>().FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await dbContext.SaveChangesAsync();
        }

        public void Update(T entity)
        {
            dbContext.Set<T>().Update(entity);
        } 
    }
}
