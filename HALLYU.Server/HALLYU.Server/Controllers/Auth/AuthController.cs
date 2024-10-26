using HALLYU.Application.Commands.Auth;
using HALLYU.Domain.Entities;
using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;
using HALLYU.Infrastructure.MailService;
using HALLYU.Infrastructure.MailService.MailModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HALLYU.Server.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseApiController<AuthController>
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly HallyuContext _hallyuContext;
        private readonly IUserService _userService;
        private readonly IEmailService _emailService;

        public AuthController(IHttpContextAccessor httpContextAccessor,
            HallyuContext hallyuContext,
            IUserService userService,
            IEmailService emailService)
        {
            this.httpContextAccessor = httpContextAccessor;
            _hallyuContext = hallyuContext;
            _userService = userService;
            _emailService = emailService;
        }

        [HttpPost("/register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserCommand command, CancellationToken cancellationToken = default)
        {
            int response = await _mediator.Send(command, cancellationToken);

            if (response == 0)
            {
                return BadRequest(new BadRequestObjectResult("Пользователь с такой почтой уже существует"));
            }

            // отправка сообщения на почту о необходимости подтвердить ее
            User user = await _hallyuContext.Users.FirstAsync(x => x.Id == response);
            var code = GenerateLinkCode();

            var callbackUrl = Url.Action(
                        "ConfirmEmail",
                        "Auth",
                        new { userId = user.Id, code = code },
                        protocol: HttpContext.Request.Scheme);

            await _emailService.SendEmail(new Message(new string[] { user.Mail }, "Подтверждение электронной почты",
                $"Подтвердите регистрацию, перейдя по ссылке: <a href='{callbackUrl}'>link</a>", true));

            return Ok(response);
        }

        [HttpPost("/login")]
        public async Task<IActionResult> LoginUser(LoginUserCommand command, CancellationToken cancellationToken = default)
        {
            var result = await _mediator.Send(command, cancellationToken);

            httpContextAccessor.HttpContext.Response.Cookies.Append("HALLYU", result);

            return Ok(result);
        }

        [HttpGet("/mailTry")]
        public async Task<IActionResult> Mail(string command, CancellationToken cancellationToken = default)
        {
            var message = new Message(new string[] { command }, "test", "content");

            await _emailService.SendEmail(message);

            return Ok();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return BadRequest();
            }

            var user = await _hallyuContext.Users.FirstAsync(x => x.Id == int.Parse(userId));
            if (user == null)
            {
                return BadRequest();
            }

            try
            {
                await _userService.ConfirmEmailAsync(user.Id);
                return Ok();
            }
            catch
            {
                return BadRequest("Не удалось подтвердить электронную почту");
            }
        }

        /// <summary>
        /// Генерация ссылки для ссылки на подтверждение почты
        /// </summary>
        /// <returns></returns>
        private string GenerateLinkCode()
        {
            Random rnd = new Random();
            var range = Enumerable.Range(0, rnd.Next(50, 75));
            var chars = range.Select(x => (char)rnd.Next('A', 'Z')).ToArray();
            var str = new string(chars);

            return str;
        }
    }
}
