using HALLYU.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HALLYU.Infrastructure.Context
{
    public partial class HallyuContext : DbContext
    {
        public HallyuContext(DbContextOptions<HallyuContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Choreographers> Choreographers { get; set; }
        public DbSet<Choreographies> Choreographies { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<UsersGroup> UsersGroups { get; set; }

    }
}
