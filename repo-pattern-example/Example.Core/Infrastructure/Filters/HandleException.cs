using Example.Domain.Enum.Log;
using Example.Domain.Model.Log;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

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

#if DEBUG
                message = "Internal Server Error::" + context.Exception.Message;
#endif
                services.LogService.Insert(
                    new LogModel(LogLevelEnum.Error, LogTypeEnum.OnException, context.Exception.Message, stacktrace: context.Exception.StackTrace)
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
