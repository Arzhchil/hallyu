using HALLYU.Application.Requirements;
using HALLYU.Infrastructure.IdentityService.Interface;
using Microsoft.AspNetCore.Authorization;

namespace HALLYU.Server.Handlers.Authentication
{
    public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
    {
        private readonly IServiceScopeFactory _serviceScopeFactory;

        public PermissionAuthorizationHandler(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionRequirement requirement)
        {
            var userId = context.User.Claims.FirstOrDefault(c => c.Type == "UserId");

            if (userId == null || !int.TryParse(userId.Value, out int id)) 
            {
                return;
            }

            using (var scope = _serviceScopeFactory.CreateScope())
            {
                var permissionService = scope.ServiceProvider.GetRequiredService<IPermissionService>();

                var permissions = await permissionService.GetPermissionsAsync(id);

                if (permissions.Intersect(requirement.Permissions).Any())
                {
                    context.Succeed(requirement);
                }
            }
        }
    }
}
