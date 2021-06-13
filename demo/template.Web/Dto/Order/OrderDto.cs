using System;
using System.Globalization;
using System.Runtime.CompilerServices;
using template.Core;

namespace template.Web.Dto.Order
{
    public class OrderDto
    {
        public long OrderId { get; set; }
        public string OrderNo { get; set; }

        public string ExternalOrderId { get; set; }
        public bool IsSynced { get; set; }
        public DateTime SyncedAt { get; set; }

        public string ProductNo { get; set; }

        public float Quantity { get; set; }
        public float PriceExVat { get; set; }
        public float VatTotal { get; set; }

        public DateTime CreatedAt { get; set; }
        public long CreatedByUserId { get; set; }
        public string CreatedByFirstName { get; set; }
        public string CreatedByLastName { get; set; }

        // HELPERS
        public string QuantityFormatted => Quantity.ToFormattedString();
        public string PriceExVatFormatted => PriceExVat.ToFormattedString();
        public string VatTotalFormatted => VatTotal.ToFormattedString();
    }
}
