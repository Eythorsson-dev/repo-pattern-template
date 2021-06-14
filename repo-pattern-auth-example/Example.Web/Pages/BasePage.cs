using Example.Core.Request.User;
using Example.Core.Service;
using Example.Domain.Model.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Example.Web.Pages
{
    [Authorize]
    public class BasePage : PageModel
    {
        protected UserModel CurrentUser { get; private set; }

        protected ServiceContext Services => Core.ExampleAppContext.Current.Services;

        public virtual void OnGet()
        {
            string url = Request.Path.Value;

            CurrentUser = Services.UserService.FirstOrDefault(new UserFilterRequest { Email = User.Identity.Name });


            if (CurrentUser == null) {
                Response.Redirect("account/login");
                return;
            }
            else if (!CurrentUser.IsEmailConfirmed) {
                if (url != "account/verify-account") {
                    Response.Redirect("account/verify");
                    return;
                }
            }

        }
    }
}
