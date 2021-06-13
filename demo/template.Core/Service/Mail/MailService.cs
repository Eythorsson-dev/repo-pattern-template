using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using template.Core.Repository;

namespace template.Core.Service.Mail
{
    public class MailService : BaseService
    {
        public MailService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        private string GetUrl(string uri)
        {
            string baseurl = "https://template.no/";
#if DEBUG
            baseurl = "https://localhost:44393/";
#endif
            return baseurl + uri;
        }
        private async Task SendMessageAsync(string subject, string message, List<string> recipientList, string senderAddress, List<(string name, byte[] content)> attachments = null)
        {

            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            using (MailMessage msg = new MailMessage())
            {
                msg.Subject = subject;
                msg.Body = message;
                msg.To.Add(string.Join(", ", recipientList));
                msg.From = new MailAddress(senderAddress, senderAddress);
                msg.IsBodyHtml = true;
                msg.BodyEncoding = Encoding.GetEncoding(1252);
                msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(msg.Body, new ContentType("text/html")));

                if (attachments != null && attachments.Count > 0)
                {
                    foreach (var a in attachments)
                    {
                        msg.Attachments.Add(new Attachment(new MemoryStream(a.content), a.name, "text/plain"));
                    }
                }

                await MailSender.SendMailAsync(msg);
            }
        }

        public Task SendPasswordResetAsync(string email, string passwordResetCode)
        {
            string body = @$"
                Please reset your password by clicking here: <a href='{GetUrl("account/password-reset")}?code={HttpUtility.UrlEncode(passwordResetCode)}&email={email}'>link</a>
            ";
            return SendMessageAsync("Password Reset", body, new List<string> { email }, "noreply@template.no");
        }

        public Task SendEmailConfirmationAsync(string email, string accountVerificationCode)
        {
            string body = @$"
                Please verify your account by clicking here: <a href='{GetUrl("account/verify")}?code={HttpUtility.UrlEncode(accountVerificationCode)}&email={email}'>link</a>
            ";
            return SendMessageAsync("Password Reset", body, new List<string> { email }, "noreply@template.no");
        }
    }
}
