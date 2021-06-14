using Newtonsoft.Json;

namespace Example.Core.ExternalApi.ExampleAuthApi.Dto.Data
{
    internal class DataRequestDto
    {

        [JsonProperty("product_no")]
        public string ProductNo { get; set; }
    }
}
