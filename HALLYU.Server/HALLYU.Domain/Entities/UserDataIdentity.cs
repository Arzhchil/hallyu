using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace HALLYU.Domain.Entities
{
    [Index("UserId")]
    public class UserDataIdentity
    {
        public int Id { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        [Required]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
