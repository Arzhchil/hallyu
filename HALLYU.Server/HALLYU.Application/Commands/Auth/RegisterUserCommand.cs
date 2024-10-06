using HALLYU.Application.DTOs.UserDTO;
using MediatR;

namespace HALLYU.Application.Commands.Auth
{
    public record RegisterUserCommand(RegisterUserDTO registerUser) : IRequest<bool>;
}
