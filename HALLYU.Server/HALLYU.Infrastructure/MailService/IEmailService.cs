using HALLYU.Infrastructure.MailService.MailModels;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.MailService
{
    public interface IEmailService
    {
        public Task SendEmail(Message message);
    }
}
