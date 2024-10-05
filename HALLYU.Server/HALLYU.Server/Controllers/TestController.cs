using HALLYU.Application.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HALLYU.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : BaseApiController<TestController>
    {
        [HttpPost(Name = "Test")]
        public async Task<IActionResult> Get([FromBody] TestCommand command, CancellationToken cancellationToken = default)
        {
            return Ok(await _mediator.Send(command, cancellationToken));
        }
    }
}
