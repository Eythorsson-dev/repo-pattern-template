using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace Example.Core.ExternalApi
{
    internal abstract class BaseExternalApi
    {
        private readonly string BaseUrl;
        private readonly HttpClient HttpClient;

        public BaseExternalApi(string baseUrl, string authToken = null, string basicAuthUsername = null, string basicAuthPassword = null)
        {
            BaseUrl = baseUrl;

            if (BaseUrl.Empty())
                throw new InvalidOperationException("BaseUrl is not set");

            HttpClient = new HttpClient() {
                BaseAddress = new Uri(BaseUrl),
            };

            if (!authToken.Empty() && (!basicAuthUsername.Empty() || !basicAuthPassword.Empty()))
                throw new ArgumentException("Token based authentication has already been added");

            if (!authToken.Empty())
                SetAuthToken(authToken);
            if (!basicAuthUsername.Empty() || !basicAuthPassword.Empty())
                SetBasicAuthCredentials(basicAuthUsername, basicAuthPassword);


            HttpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("wiseBaseAPI", "1.0"));
        }

        public void SetAuthToken(string authToken)
        {
            HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", authToken);
        }

        private void SetBasicAuthCredentials(string basicAuthUsername, string basicAuthPassword)
        {
            if (basicAuthUsername.Empty()) throw new ArgumentException("basicAuthUsername is not set", "basicAuthUsername");
            if (basicAuthPassword.Empty()) throw new ArgumentException("basicAuthPassword is not set", "basicAuthPassword");

            var byteArray = Encoding.ASCII.GetBytes($"{basicAuthUsername}:{basicAuthPassword}");
            HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
        }

        private string GetQueryString(object queryParameters)
        {
            if (queryParameters == null) return "";

            var properties = queryParameters.GetType().GetProperties()
                .Where(p => p.GetValue(queryParameters, null) != null)
                .Select(p => p.Name + "=" + HttpUtility.UrlEncode(p.GetValue(queryParameters, null).ToString()));

            return string.Join("&", properties.ToArray());
        }

        protected async Task<TResponse> HttpGetAsync<TResponse>(string uri, CancellationToken cancellationToken, object queryParameters = null)
        {
            var _uri = new Uri(uri + (queryParameters == null ? "" : "?" + GetQueryString(queryParameters)), UriKind.Relative);
            var response = await HttpClient.GetAsync(_uri, cancellationToken);
            var responseStr = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, responseStr);

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }
        protected TResponse HttpGet<TResponse>(string uri, object queryParameters = null)
        {
            var _uri = new Uri(uri + (queryParameters == null ? "" : "?" + GetQueryString(queryParameters)), UriKind.Relative);
            var response = HttpClient.GetAsync(_uri).Result;
            var responseStr = response.Content.ReadAsStringAsync().Result;

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, responseStr);

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }


        protected async Task<HttpResponseMessage> HttpPostAsync(string uri, CancellationToken cancellationToken, object body = null)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = await HttpClient.PostAsJsonAsync(_uri, body, cancellationToken);

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, await response.Content.ReadAsStringAsync());

            return response;
        }
        protected async Task<TResponse> HttpPostAsync<TResponse>(string uri, CancellationToken cancellationToken, object body = null)
        {
            var response = await HttpPostAsync(uri, cancellationToken, body);
            var responseStr = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }
        protected HttpResponseMessage HttpPost(string uri, object body = null)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = HttpClient.PostAsJsonAsync(_uri, body).Result;

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, response.Content.ReadAsStringAsync().Result);

            return response;
        }
        protected TResponse HttpPost<TResponse>(string uri, object body = null)
        {
            var response = HttpPost(uri, body);
            var responseStr = response.Content.ReadAsStringAsync().Result;

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }


        protected async Task<HttpResponseMessage> HttpPutAsync(string uri, CancellationToken cancellationToken, object body = null)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = await HttpClient.PutAsJsonAsync(_uri, body, cancellationToken);

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, await response.Content.ReadAsStringAsync());

            return response;
        }
        protected async Task<TResponse> HttpPutAsync<TResponse>(string uri, CancellationToken cancellationToken, object body = null)
        {
            var response = await HttpPutAsync(uri, cancellationToken, body);
            var responseStr = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }
        protected HttpResponseMessage HttpPut(string uri, object body = null)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = HttpClient.PutAsJsonAsync(_uri, body).Result;

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, response.Content.ReadAsStringAsync().Result);

            return response;
        }
        protected TResponse HttpPut<TResponse>(string uri, object body = null)
        {
            var response = HttpPut(uri, body);
            var responseStr = response.Content.ReadAsStringAsync().Result;

            return JsonConvert.DeserializeObject<TResponse>(responseStr);
        }


        protected async Task<HttpResponseMessage> HttpDeleteAsync(string uri, CancellationToken cancellationToken)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = await HttpClient.DeleteAsync(_uri, cancellationToken);

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, await response.Content.ReadAsStringAsync());

            return response;
        }
        protected HttpResponseMessage HttpDelete(string uri)
        {
            var _uri = new Uri(uri, UriKind.Relative);
            var response = HttpClient.DeleteAsync(_uri).Result;

            if (!response.IsSuccessStatusCode)
                throw new ExternalApiException(response.StatusCode, response.Content.ReadAsStringAsync().Result);

            return response;
        }
    }
}
