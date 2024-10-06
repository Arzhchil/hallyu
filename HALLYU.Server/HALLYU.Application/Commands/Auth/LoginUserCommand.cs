using MediatR;

namespace HALLYU.Application.Commands.Auth
{
    public record LoginUserCommand(string email, string password) : IRequest<string>;
}
