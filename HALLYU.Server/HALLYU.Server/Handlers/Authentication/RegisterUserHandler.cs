using HALLYU.Application.Commands.Auth;
using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;

namespace HALLYU.Server.Handlers.Authentication
{
    public class RegisterUserHandler : BaseServerHandler<RegisterUserCommand, int>
    {
        private readonly IUserService _userService;
        public RegisterUserHandler(HallyuContext hallyuContext, IUserService userService) : base(hallyuContext)
        {
            _userService = userService;
        }

        public async override Task<int> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
        {
            int result = await _userService.AddUser(request.registerUser);

            return result;
        }
    }
}
