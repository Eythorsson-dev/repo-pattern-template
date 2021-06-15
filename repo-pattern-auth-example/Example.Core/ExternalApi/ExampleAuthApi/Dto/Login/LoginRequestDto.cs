using Newtonsoft.Json;

namespace Example.Core.ExternalApi.ExampleAuthApi.Dto.Login
{
    internal class LoginRequestDto
    {
        [JsonProperty("brukernavn")]
        public string Username { get; set; }

        [JsonProperty("passord")]
        public string Password { get; set; }
    }
}
