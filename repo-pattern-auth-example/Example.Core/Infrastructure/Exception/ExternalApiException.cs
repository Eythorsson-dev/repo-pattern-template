using System;
using System.Net;

namespace Example.Core
{
    class ExternalApiException : Exception
    {
        public HttpStatusCode StatusCode { get; }

        public ExternalApiException(HttpStatusCode statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }

    }
}
