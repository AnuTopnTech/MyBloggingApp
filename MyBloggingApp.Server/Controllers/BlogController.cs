
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyBloggingApp.Server.Data.Repository;
using MyBloggingApp.Server.Dto;
using MyBloggingApp.Server.Entity;



namespace MyBloggingApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IRepository<Blog> _blogRepository;
        public BlogController(IRepository<Blog> blogRepository) {
        
            _blogRepository = blogRepository;
        }

        [HttpGet]
        public async Task<ActionResult> GetBlogsList()
        {
          var blogs = await _blogRepository.GetAll();
            return Ok(blogs);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetBlog([FromRoute] int id) {
        
            var blog= await _blogRepository.GetById(id);
            return Ok(blog);
        }    

       
        [HttpPost]
        public async Task<ActionResult> AddBlog([FromBody]BlogDto model)
        {
            var blog = new Blog()
            {  
                CategoryId = model.CategoryId,
                IsFeatured = model.IsFeatured,    
                Content = model.Content,
                Title = model.Title,
                Description = model.Description,
                Image = model.Image,
            };
            await _blogRepository.AddAsync(blog);
            await _blogRepository.SaveChangesAsync();
            return Ok(model);
        }

        
        [HttpPut("{id}")]
         public async Task<ActionResult> UpdateBlog([FromRoute]int id, [FromBody] BlogDto model)
        {
            var blog = await _blogRepository.GetById(id);
            blog.Title = model.Title;
            blog.Description = model.Description;
            blog.Content = model.Content;
            blog.IsFeatured = model.IsFeatured;
            blog.Image = model.Image;
            _blogRepository.Update(blog);
            await _blogRepository.SaveChangesAsync();
            return Ok(model);
         }


        
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBlog([FromRoute] int id)
        {

            await _blogRepository.DeleteAsync(id);
            await _blogRepository.SaveChangesAsync();
            return Ok(new { message = "Delete Successfully" });
        }
        [HttpGet("featured")]
        public async Task<ActionResult> GetBlogFeatureList()
        {
            var blogs = await _blogRepository.GetAll(x=>x.IsFeatured==true);
            return Ok(blogs);
        }
    }
}
