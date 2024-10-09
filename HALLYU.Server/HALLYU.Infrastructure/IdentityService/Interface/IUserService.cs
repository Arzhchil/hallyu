using HALLYU.Application.DTOs.Permissions;
using HALLYU.Application.DTOs.UserDTO;
using HALLYU.Domain.Enums;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.IdentityService.Interface
{
    public interface IUserService
    {
        public Task AddUser(RegisterUserDTO registerUserDTO);

        public Task<string> Login(string email, string password);

        Task<HashSet<Permission>> GetUserPermissions(int userId);
    }
}
