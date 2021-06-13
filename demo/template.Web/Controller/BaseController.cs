using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using template.Core;
using template.Core.Infrastructure.Filters;
using template.Core.Request.User;
using template.Core.Service;
using template.Core.Service.Log;
using template.Domain.Model.User;

namespace template.Controller
{
    [Authorize]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected ServiceContext Services => templateAppContext.Current.Services;
        protected LogService LogService => Services.LogService;

        protected UserModel CurrentUser => GetCurrentUser();

        private UserModel _currentUser;
        private UserModel GetCurrentUser()
        {
            if (_currentUser == null && User != null)
            {
                var user_req = new UserFilterRequest { UserId = long.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) };
                _currentUser = Services.UserService.FirstOrDefault(user_req);
            }
            return _currentUser;
        }
    }
}
