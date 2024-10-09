using HALLYU.Domain.Entities;
using HALLYU.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Linq;

namespace HALLYU.Domain.Configurations
{
    public class PermissionConfiguration : IEntityTypeConfiguration<Permissions>
    {
        public void Configure(EntityTypeBuilder<Permissions> builder)
        {
            builder.HasKey(x => x.Id);

            var permissions = Enum.GetValues<Enums.Permission>()
                .Select(x => new Permissions()
                {
                    Id = (int)x,
                    Name = x.ToString()
                });

            builder.HasData(permissions);
        }
    }
}
