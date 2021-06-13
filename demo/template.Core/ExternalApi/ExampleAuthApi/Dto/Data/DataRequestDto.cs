using Newtonsoft.Json;

namespace template.Core.ExternalApi.ExampleAuthApi.Dto.Data
{
    internal class DataRequestDto
    {

        [JsonProperty("product_no")]
        public string ProductNo { get; set; }
    }
}
