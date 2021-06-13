using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace template.Core.ExternalApi.ExampleAuthApi.Dto.Login
{
    internal class LoginResponseDto
    {
        [JsonProperty("Token")]
        public string Token { get; set; }

        [JsonProperty("TokenExpiresUTC")]
        public DateTime TokenExpiresUTC { get; set; }
    }
}
