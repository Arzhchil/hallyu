using HALLYU.Application.Commands;
using HALLYU.Application.Commands.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HALLYU.Server.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseApiController<AuthController>
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public AuthController(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        [HttpPost("/register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserCommand command, CancellationToken cancellationToken = default)
        {
            return Ok(await _mediator.Send(command, cancellationToken));
        }

        [HttpPost("/login")]
        public async Task<IActionResult> LoginUser(LoginUserCommand command, CancellationToken cancellationToken = default)
        {
            var result = await _mediator.Send(command, cancellationToken);

            httpContextAccessor.HttpContext.Response.Cookies.Append("HALLYU", result);

            return Ok(result);
        }
    }
}
