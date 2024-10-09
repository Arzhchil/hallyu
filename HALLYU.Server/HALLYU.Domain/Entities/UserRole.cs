using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HALLYU.Domain.Entities
{
    public class UserRole
    {
        public int UserId { get; set; }  
        public int RoleId { get; set; }
    }
}
