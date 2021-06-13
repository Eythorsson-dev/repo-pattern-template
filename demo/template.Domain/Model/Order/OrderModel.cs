using System;

namespace template.Domain.Model.Order
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
        public long CreatedByUserId { get; set; }
        public string CreatedByFirstName { get; set; }
        public string CreatedByLastName { get; set; }

        public OrderModel() { }

        /// <param name="createdByUserId">If unset must the CreatedByFirst Name be: <i>System</i></param>
        /// <param name="createdByFirstName">If createdByUserId is set will the FirstName be auto set</param>
        /// <param name="createdByLastName">If createdByUserId is set will the LastName be auto set</param>
        public OrderModel(string orderNo, string productNo, float quantity, float priceExVat, float vatTotal,
            long createdByUserId = 0, string createdByFirstName = null, string createdByLastName = null, string externalOrderId = null, 
            bool isSynced = false, DateTime? syncedAt = null, DateTime? createdAt = null)
        {
            if (syncedAt == null) syncedAt = DateTime.MinValue;
            if (createdAt == null) createdAt = DateTime.Now;
            if (createdByUserId < 1 && createdByFirstName != "System")
                throw new ArgumentException("Order.CreatedByFirstName must by System if the Order.CreatedByUserId is not set", "CreatedByFirstName");

            OrderNo = orderNo;
            ExternalOrderId = externalOrderId;
            IsSynced = isSynced;
            SyncedAt = syncedAt.Value;

            ProductNo = productNo;
            Quantity = quantity;
            PriceExVat = priceExVat;
            VatTotal = vatTotal;

            CreatedAt = createdAt.Value;
            CreatedByUserId = createdByUserId;
            CreatedByFirstName = createdByFirstName;
            CreatedByLastName = createdByLastName;
        }
    }
}
