using Example.Core;
using Example.Core.Request.User;
using Example.Core.Service;
using Example.Core.Service.Log;
using Example.Domain.Model.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Example.Controller
{
    [Authorize]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected ServiceContext Services => ExampleAppContext.Current.Services;
        protected LogService LogService => Services.LogService;

        protected UserModel CurrentUser => GetCurrentUser();

        private UserModel _currentUser;
        private UserModel GetCurrentUser()
        {
            if (_currentUser == null && User != null) {
                var user_req = new UserFilterRequest { UserId = long.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) };
                _currentUser = Services.UserService.FirstOrDefault(user_req);
            }
            return _currentUser;
        }
    }
}
