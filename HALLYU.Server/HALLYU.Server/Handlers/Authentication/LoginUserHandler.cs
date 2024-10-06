using HALLYU.Application.Commands.Auth;
using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;

namespace HALLYU.Server.Handlers.Authentication
{
    public class LoginUserHandler : BaseServerHandler<LoginUserCommand, string>
    {
        private readonly IUserService _userService;

        public LoginUserHandler(HallyuContext hallyuContext, IUserService userService) : base(hallyuContext)
        {
            _userService = userService;
        }

        public override async Task<string> Handle(LoginUserCommand request, CancellationToken cancellationToken)
        {
            string token = await _userService.Login(request.email, request.password);

            return token;
        }
    }
}
