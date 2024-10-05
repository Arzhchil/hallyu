using MediatR;

namespace HALLYU.Application.Commands
{
    public record TestCommand(int Id) : IRequest<int>;
}
