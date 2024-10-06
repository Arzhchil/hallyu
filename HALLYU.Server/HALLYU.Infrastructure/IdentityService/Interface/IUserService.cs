using HALLYU.Application.DTOs.UserDTO;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.IdentityService.Interface
{
    public interface IUserService
    {
        public Task AddUser(RegisterUserDTO registerUserDTO);

        public Task<string> Login(string email, string password);
    }
}
