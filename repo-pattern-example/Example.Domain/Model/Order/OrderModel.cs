using System;

namespace Example.Domain.Model.Order
{
    public class OrderModel : PagedModel
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

        public OrderModel() { }

        public OrderModel(string orderNo, string productNo, float quantity, float priceExVat, float vatTotal,
            string externalOrderId = null, bool isSynced = false, DateTime? syncedAt = null, DateTime? createdAt = null)
        {
            if (syncedAt == null) syncedAt = DateTime.MinValue;
            if (createdAt == null) createdAt = DateTime.Now;

            OrderNo = orderNo;
            ExternalOrderId = externalOrderId;
            IsSynced = isSynced;
            SyncedAt = syncedAt.Value;

            ProductNo = productNo;
            Quantity = quantity;
            PriceExVat = priceExVat;
            VatTotal = vatTotal;

            CreatedAt = createdAt.Value;
        }
    }
}
