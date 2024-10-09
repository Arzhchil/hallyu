using HALLYU.Domain.Enums;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.IdentityService.Interface
{
    public interface IPermissionService
    {
        public Task<HashSet<Permission>> GetPermissionsAsync(int userId);
    }
}
