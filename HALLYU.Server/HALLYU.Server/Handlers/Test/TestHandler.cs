using HALLYU.Application.Commands;
using HALLYU.Infrastructure.Context;

namespace HALLYU.Server.Handlers.Test
{
    public class TestHandler : BaseServerHandler<TestCommand, int>
    {
        public TestHandler(HallyuContext hallyuContext) : base(hallyuContext)
        {
        }

        public async override Task<int> Handle(TestCommand request, CancellationToken cancellationToken)
        {
            return request.Id;
        }
    }
}
