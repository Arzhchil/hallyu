using HALLYU.Infrastructure.Context;
using MediatR;

namespace HALLYU.Server.Handlers
{
    public abstract class BaseServerHandler<TRequest, TResponse> : IRequestHandler<TRequest, TResponse> where TRequest : IRequest<TResponse>
    {
        public HallyuContext _hallyuContext { get; private set; }

        public BaseServerHandler(HallyuContext hallyuContext)
        {
            _hallyuContext = hallyuContext;
        }

        public abstract Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken);
    }
}
