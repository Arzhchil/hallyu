using HALLYU.Domain;
using HALLYU.Domain.Configurations;
using HALLYU.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace HALLYU.Infrastructure.Context
{
    public partial class HallyuContext : DbContext
    {
        public IOptions<AuthorizationOptions> AuthOpt { get; set; }

        public HallyuContext(DbContextOptions<HallyuContext> options, IOptions<AuthorizationOptions> authOpt) : base(options)
        {
            AuthOpt = authOpt;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Choreographers> Choreographers { get; set; }
        public DbSet<Choreographies> Choreographies { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<UsersGroup> UsersGroups { get; set; }
        public DbSet<UserDataIdentity> UserDataIdentities { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Permissions> Permissions { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(HallyuContext).Assembly);
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new PermissionConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
            modelBuilder.ApplyConfiguration(new RolePermissionConfiguration(AuthOpt.Value));
        }
    }
}
