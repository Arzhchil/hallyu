using HALLYU.Application.Commands.Auth;
using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;

namespace HALLYU.Server.Handlers.Authentication
{
    public class RegisterUserHandler : BaseServerHandler<RegisterUserCommand, bool>
    {
        private readonly IUserService _userService;
        public RegisterUserHandler(HallyuContext hallyuContext, IUserService userService) : base(hallyuContext)
        {
            _userService = userService;
        }

        public async override Task<bool> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
        {
            await _userService.AddUser(request.registerUser);

            return true;
        }
    }
}
