using HALLYU.Application.Commands;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HALLYU.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : BaseApiController<TestController>
    {
        [HttpPost(Name = "Test")]
        [Authorize]
        public async Task<IActionResult> Get([FromBody] TestCommand command, CancellationToken cancellationToken = default)
        {
            return Ok(await _mediator.Send(command, cancellationToken));
        }
    }
}
