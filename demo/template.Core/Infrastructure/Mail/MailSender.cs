using System.Net.Mail;
using System.Threading.Tasks;

namespace template.Core
{
    static class MailSender
    {
        public static async Task SendMailAsync(MailMessage message)
        {
            using (SmtpClient smtp = new SmtpClient()) {
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Host = "192.168.1.19";
                smtp.Port = 25;
#if DEBUG
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Host = "127.0.0.1";
#endif
                await smtp.SendMailAsync(message);
            }
        }

        public static void SendMail(MailMessage message)
        {
            SendMailAsync(message).Wait();
        }
    }
}
