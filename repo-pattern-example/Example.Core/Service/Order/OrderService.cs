using Example.Core.Repository;
using Example.Core.Request.Order;
using Example.Core.Service.Integration;
using Example.Domain;
using Example.Domain.Enum.Log;
using Example.Domain.Model.Log;
using Example.Domain.Model.Order;
using System;
using System.Collections.Generic;
using System.Net;

namespace Example.Core.Service.Order
{
    public class OrderService : BaseService
    {
        private Integration_ExampleAuthService Integration_ExternalOrderSystemService { get; }

        public OrderService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory,
            Integration_ExampleAuthService integration_ExampleAuthService) : base(uowProvider, repoFactory)
        {
            Integration_ExternalOrderSystemService = integration_ExampleAuthService;
        }

        public PagedModel<OrderModel> GetPagedList(OrderFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.OrderRepo(uow);
                return repo.GetPagedList(request);
            }
        }
        public List<OrderModel> GetList(OrderFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.OrderRepo(uow);
                return repo.GetList(request);
            }
        }
        public OrderModel FirstOrDefault(OrderFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.OrderRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public OrderModel SingleOrDefault(OrderFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.OrderRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }

        internal void Update(IUnitOfWork uow, OrderModel model)
        {
            ValidateModel(model);
            var repo = RepoFactory.OrderRepo(uow);
            if (!repo.Update(model))
                throw new ArgumentException("Failed to update the Order");
        }

        public long Insert(OrderModel model)
        {
            ValidateModel(model);

            // INSERT AND SYNC THE ORDER
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                // SYNC THE ORDER
                var repo = RepoFactory.OrderRepo(uow);
                model.OrderId = repo.Insert(model);

                if (model.OrderId < 1)
                    throw new ArgumentException("Failed to insert the Order");

                // SYNC THE ORDER
                try {
                    // THE SyncOrder METHOD IS UNCOMMENTED AS IT IS ONLY AN EXAMPLE INTEGRATION AN IS NOT 
                    // CONNECTED TO A REAL ENDPOINT

                    //model.ExternalOrderId = Integration_ExternalOrderSystemService.SyncOrder(model);
                    model.IsSynced = true;
                    model.SyncedAt = DateTime.Now;
                    Update(uow, model);
                }
                catch (ExternalApiException ex) {
                    if (ex.StatusCode != HttpStatusCode.BadRequest) throw;

                    // LOG THE FAILED SYNC AS A WARNING
                    LogService.Insert(new LogModel(LogLevelEnum.Warning, LogTypeEnum.Order, "Failed to Sync the order::" + ex.Message,
                        stacktrace: ex.StackTrace, referanceId: model.OrderId, referanceName: nameof(model.OrderId), referanceFriendlyName: model.OrderNo
                    ));
                }

                return model.OrderId;
            }
        }

        public void Delete(OrderModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.OrderRepo(uow);
                if (!repo.DeleteById(model.OrderId))
                    throw new ArgumentException("Failed to delete the Order");

                Integration_ExternalOrderSystemService.DeleteOrder(model);

                uow.Commit();
            }

            // LOG THE DELETION
            LogService.Insert(new LogModel(LogLevelEnum.Information, LogTypeEnum.OrderDeleted, "Order deleted",
                referanceId: model.OrderId, referanceName: nameof(model.OrderId), referanceFriendlyName: model.OrderNo));
        }

        public void ValidateModel(OrderModel model)
        {
            if (model.OrderNo.Empty()) throw new FeedbackException("Name is not set", "Name");
            if (model.ProductNo.Empty()) throw new FeedbackException("Product No is not set", "ProductNo");

            if (model.Quantity < 1) throw new FeedbackException("Quantity is not set", "Quantity");
            if (model.PriceExVat < 1) throw new FeedbackException("Price (Ex Vat) is not set", "PriceExVat");
            if (model.VatTotal < 1) throw new FeedbackException("Vat is not set", "VatTotal");
        }
    }
}
