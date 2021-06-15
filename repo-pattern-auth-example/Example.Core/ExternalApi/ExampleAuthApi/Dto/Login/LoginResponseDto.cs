using Newtonsoft.Json;
using System;

namespace Example.Core.ExternalApi.ExampleAuthApi.Dto.Login
{
    internal class LoginResponseDto
    {
        [JsonProperty("Token")]
        public string Token { get; set; }

        [JsonProperty("TokenExpiresUTC")]
        public DateTime TokenExpiresUTC { get; set; }
    }
}
