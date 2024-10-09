using System.Collections.Generic;

namespace HALLYU.Domain.Entities
{
    public class Permissions
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Roles> Roles { get; set; } = [];
    }
}
