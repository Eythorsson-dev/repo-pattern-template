using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace template.Core.ExternalApi.ExampleAuthApi.Dto.Login
{
    internal class LoginRequestDto
    {
        [JsonProperty("brukernavn")]
        public string Username { get; set; }

        [JsonProperty("passord")]
        public string Password { get; set; }
    }
}
