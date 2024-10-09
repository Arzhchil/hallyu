using HALLYU.Domain.Entities;
using HALLYU.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Linq;

namespace HALLYU.Domain.Configurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<Roles>
    {
        public void Configure(EntityTypeBuilder<Roles> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasMany(x => x.Permissions)
                .WithMany(r => r.Roles)
                .UsingEntity<RolePermission>(
                    l => l.HasOne<Permissions>().WithMany().HasForeignKey(x => x.PermissionId),
                    r => r.HasOne<Roles>().WithMany().HasForeignKey(x => x.RoleId)
                );

            var roles = Enum
                .GetValues<Role>()
                .Select(r => new Roles()
                {
                    Id = (int)r,
                    Name = r.ToString()
                });

            builder.HasData(roles);
        }
    }
}
