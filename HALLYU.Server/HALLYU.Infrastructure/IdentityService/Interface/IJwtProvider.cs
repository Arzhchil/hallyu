using HALLYU.Domain.Entities;

namespace HALLYU.Infrastructure.IdentityService.Interface
{
    public interface IJwtProvider
    {
        public string GenerateToken(User user);
    }
}