using Example.Core.Request.User;
using Example.Domain.Enum.Log;
using Example.Domain.Model.Log;
using Example.Domain.Model.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;
using System.Security.Claims;

namespace Example.Core.Infrastructure.Filters
{
    public class HandleException : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {

            HttpStatusCode status = HttpStatusCode.InternalServerError;
            var message = "Server error occurred.";

            if (context.Exception.GetType() == typeof(FeedbackException)) {
                status = HttpStatusCode.BadRequest;
                message = context.Exception.Message;
            }

            else {
                status = HttpStatusCode.InternalServerError;
                // LOG EXCEPTION
                var services = ExampleAppContext.Current.Services;

                UserModel currentUser = null;
                if (long.TryParse(context.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value, out long userId)) {
                    currentUser = services.UserService.FirstOrDefault(new UserFilterRequest { UserId = userId });
                }
#if DEBUG
                message = "Internal Server Error::" + context.Exception.Message;
#endif
                services.LogService.Insert(
                    new LogModel(LogLevelEnum.Error, LogTypeEnum.OnException, context.Exception.Message, stacktrace: context.Exception.StackTrace,
                    userId: currentUser?.UserId ?? 0)
                );
            }

            context.ExceptionHandled = true;
            HttpResponse response = context.HttpContext.Response;
            response.StatusCode = (int)status;
            response.ContentType = "application/json";
            context.Result = new ObjectResult(new { ExceptionMessage = message });
        }
    }
}
