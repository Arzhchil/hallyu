using HALLYU.Infrastructure.MailService.MailModels;
using MailKit.Net.Smtp;
using MimeKit;
using System.Threading.Tasks;

namespace HALLYU.Infrastructure.MailService
{
    public class EmailService : IEmailService
    {
        private readonly EmailConfiguration _emailConfiguration;

        public EmailService(EmailConfiguration emailConfiguration)
        {
            _emailConfiguration = emailConfiguration;
        }

        public async Task SendEmail(Message message)
        {
            var emailMessage = CreateEmailMessage(message);

            Send(emailMessage);
        }

        private MimeMessage CreateEmailMessage(Message message)
        {
            var mail = new MimeMessage();
            mail.From.Add(new MailboxAddress("mail", _emailConfiguration.From));
            mail.To.AddRange(message.To);
            mail.Subject = message.Subject;
            if (message.IsHtmpView)
            {
                mail.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = message.Content };
            }
            else
            {
                mail.Body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = message.Content };
            }

            return mail;
        }

        private void Send(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(_emailConfiguration.SmtpServer, _emailConfiguration.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate(_emailConfiguration.UserName, _emailConfiguration.Password);

                    client.Send(message);
                }
                finally
                {
                    client.Disconnect(true);
                }
            }
        }
    }
}
