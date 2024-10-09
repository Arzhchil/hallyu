using HALLYU.Domain.Entities;
using HALLYU.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

namespace HALLYU.Domain.Configurations
{
    public class RolePermissionConfiguration : IEntityTypeConfiguration<RolePermission>
    {
        private readonly AuthorizationOptions _authorizationOptions;

        public RolePermissionConfiguration(AuthorizationOptions authorizationOptions)
        {
            _authorizationOptions = authorizationOptions;   
        }

        public void Configure(EntityTypeBuilder<RolePermission> builder)
        {
            builder.HasKey(r => new { r.RoleId, r.PermissionId });

            var rp = GetRolePermissions();

            builder.HasData(rp);
        }

        private List<RolePermission> GetRolePermissions()
        {
            return _authorizationOptions.RolePermissions
                .SelectMany(rp => rp.Permissions
                .Select(p => new RolePermission()
                {
                    RoleId = (int)Enum.Parse<Role>(rp.Role),
                    PermissionId = (int)Enum.Parse<Permission>(p)
                })).ToList();
        }
    }
}
