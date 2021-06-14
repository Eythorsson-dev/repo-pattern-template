using System;

namespace Example.Core.Request.Order
{
    public class OrderFilterRequest : BaseRequestPaged<OrderOrderByEnum>
    {
        public long OrderId { get; set; }
        public string OrderNo { get; set; }

        public string ExternalOrderId { get; set; }
        public bool? isSynced { get; set; }
        public DateTime SyncedAtFrom { get; set; }
        public DateTime SyncedAtTo { get; set; }


        public string ProductNo { get; set; }
        public string ProductNoExact { get; set; }
        public float QuantityFrom { get; set; }
        public float QuantityTo { get; set; }
        public float PriceExVatFrom { get; set; }
        public float PriceExVatTo { get; set; }
        public float VatTotalFrom { get; set; }
        public float VatTotalTo { get; set; }

        public DateTime CreatedAtFrom { get; set; }
        public DateTime CreatedAtTo { get; set; }
        public long CreatedByUserId { get; set; }
        public string CreatedByFirstName { get; set; }
        public string CreatedByLastName { get; set; }

    }

    public enum OrderOrderByEnum
    {
        ExternalOrderId = 1,
        ProductNo = 2,
        Quantity = 3,
        PriceExVat = 4,
        VatTotal = 5,
        CreatedAt = 6,
    }
}
