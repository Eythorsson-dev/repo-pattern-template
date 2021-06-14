using Example.Core.Service;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Example.Web.Pages
{
    public class BasePage : PageModel
    {
        protected ServiceContext Services => Core.ExampleAppContext.Current.Services;

        public virtual void OnGet()
        {

        }
    }
}
