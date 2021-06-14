using Example.Core;
using Example.Core.Service;
using Example.Core.Service.Log;
using Microsoft.AspNetCore.Mvc;

namespace Example.Controller
{
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected ServiceContext Services => ExampleAppContext.Current.Services;
        protected LogService LogService => Services.LogService;
    }
}
