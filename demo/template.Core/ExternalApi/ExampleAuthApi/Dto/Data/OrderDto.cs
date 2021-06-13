using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace template.Core.ExternalApi.ExampleAuthApi.Dto.Data
{
    internal class OrderDto
    {
        /// <summary>
        /// Auto Generated
        /// </summary>
        [JsonProperty("order_id")]
        public string ExternalOrderId { get; set; }

        [JsonProperty("product_no")]
        public string ProductNo { get; set; }

        [JsonProperty("amount")]
        public float Quantity { get; set; }

        /// <summary>
        /// The total price (including vat) of the order.
        /// </summary>
        [JsonProperty("price")]
        public float PriceIncVat { get; set; }
    }
}
