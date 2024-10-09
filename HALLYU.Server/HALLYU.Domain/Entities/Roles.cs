using System.Collections.Generic;

namespace HALLYU.Domain.Entities
{
    public class Roles
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; } = [];

        public ICollection<Permissions> Permissions { get; set; } = [];
    }
}
