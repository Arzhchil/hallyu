using HALLYU.Domain.Enums;
using Microsoft.AspNetCore.Authorization;

namespace HALLYU.Application.Requirements
{
    public class PermissionRequirement : IAuthorizationRequirement
    {
        public PermissionRequirement(params Permission[] permissions)
        {
            Permissions = permissions;
        }

        public Permission[] Permissions { get; set; } = [];
    }
}
