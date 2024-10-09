using HALLYU.Domain.Enums;
using HALLYU.Infrastructure.IdentityService.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.IdentityService
{
    public class PermissionService : IPermissionService
    {
        private readonly IUserService _userService;
        public PermissionService(IUserService userService)
        {

            _userService = userService;
        }

        public Task<HashSet<Permission>> GetPermissionsAsync(int userId)
        {
            return _userService.GetUserPermissions(userId);
        }
    }
}
