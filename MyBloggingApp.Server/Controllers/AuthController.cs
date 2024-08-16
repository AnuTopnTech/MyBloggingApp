
using Microsoft.AspNetCore.Authentication.BearerToken;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyBloggingApp.Server.Data.Repository;
using MyBloggingApp.Server.Dto;
using MyBloggingApp.Server.Entity;
using System.Security.Claims;

namespace MyBloggingApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IRepository<User> _repository;

        public AuthController(IRepository<User> repository) {
         _repository = repository;
        }

        [HttpPost]
        public async Task<IResult>Login([FromBody] LoginDto model)
        {
            var user = (await _repository.GetAll(x=>x.Email==model.Email)).FirstOrDefault();
            if (user is not null && user.Password == model.Password) {

#pragma warning disable CS8604 // Possible null reference argument.
                var claimsPrincipal = new ClaimsPrincipal(

                    new ClaimsIdentity(
                        new[] { new Claim(ClaimTypes.Name, model.Email) },
                        BearerTokenDefaults.AuthenticationScheme
                        ));
#pragma warning restore CS8604 // Possible null reference argument.

                return Results.SignIn(claimsPrincipal);

            }
            else
            {
                return Results.BadRequest();
            }
        }
    }
}
