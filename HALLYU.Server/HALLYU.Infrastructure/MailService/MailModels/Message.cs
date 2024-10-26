using MimeKit;
using System.Collections.Generic;
using System.Linq;

namespace HALLYU.Infrastructure.MailService.MailModels
{
    public class Message
    {
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public bool IsHtmpView { get; set; }

        public Message(IEnumerable<string> to, string subject, string content, bool isHtmlView = false)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(x => new MailboxAddress("mail",x)));
            To=To;
            Subject=subject;
            Content=content;
            IsHtmpView=isHtmlView;
        }
    }
}
