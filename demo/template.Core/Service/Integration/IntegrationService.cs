using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using template.Core.Repository;
using template.Core.Request.Integration;
using template.Domain.Model.Integration;

namespace template.Core.Service.Integration
{
    public class IntegrationService : BaseService
    {
        public IntegrationService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public List<IntegrationModel> GetList(IntegrationFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var items = repo.GetList(request);
                items?.ForEach(item => item.AdditionalData = repo.GetIntegrationAdditionalData(item.IntegrationId));
                return items;
            }
        }
        public async Task<List<IntegrationModel>> GetListAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var items = await repo.GetListAsync(request, cancellationToken);
                items?.ForEach(async item => item.AdditionalData = await repo.GetIntegrationAdditionalDataAsync(item.IntegrationId, cancellationToken));
                return items;
            }
        }
        public IntegrationModel FirstOrDefault(IntegrationFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var item = repo.FirstOrDefault(request);
                if (item != null) item.AdditionalData = repo.GetIntegrationAdditionalData(item.IntegrationId);
                return item;
            }
        }
        public async Task<IntegrationModel> FirstOrDefaultAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var item = await repo.FirstOrDefaultAsync(request, cancellationToken);
                if (item != null) item.AdditionalData = await repo.GetIntegrationAdditionalDataAsync(item.IntegrationId, cancellationToken);
                return item;
            }
        }

        public IntegrationModel SingleOrDefault(IntegrationFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var item = repo.SingleOrDefault(request);
                if (item != null) item.AdditionalData = repo.GetIntegrationAdditionalData(item.IntegrationId);
                return item;
            }
        }
        public async Task<IntegrationModel> SingleOrDefaultAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.IntegrationRepo(uow);
                var item = await repo.SingleOrDefaultAsync(request, cancellationToken);
                if (item != null) item.AdditionalData = await repo.GetIntegrationAdditionalDataAsync(item.IntegrationId, cancellationToken);

                return item;
            }
        }

        public IntegrationModel GetById(long IntegrationId)
        {
            var request = new IntegrationFilterRequest { IntegrationId = IntegrationId };
            return FirstOrDefault(request);
        }

        public void Update(IntegrationModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);

                if (!repo.Update(model))
                    throw new ArgumentException("Failed to update the Integration");

                repo.DeleteIntegrationAdditionalData(model.IntegrationId);

                if (model.AdditionalData != null) {
                    foreach (var item in model.AdditionalData) {
                        if (!repo.InsertIntegrationAdditionalData(model.IntegrationId, item.Key, item.Value))
                            throw new ArgumentException("Failed to update the Integration Additional Data");
                    }
                }
            }
        }
        public async Task UpdateAsync(IntegrationModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);

                if (!await repo.UpdateAsync(model, cancellationToken))
                    throw new ArgumentException("Failed to update the Integration");

                await repo.DeleteIntegrationAdditionalDataAsync(model.IntegrationId, cancellationToken);
                if (model.AdditionalData != null) {
                    foreach (var item in model.AdditionalData) {
                        if (!await repo.InsertIntegrationAdditionalDataAsync(model.IntegrationId, item.Key, item.Value, cancellationToken))
                            throw new ArgumentException("Failed to update the Integration Additional Data");
                    }
                }
            }
        }

        public long Insert(IntegrationModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);
                model.IntegrationId = repo.Insert(model);

                if (model.IntegrationId < 1)
                    throw new ArgumentException("Failed to insert the Integration");

                repo.DeleteIntegrationAdditionalData(model.IntegrationId);

                if (model.AdditionalData != null) {
                    foreach (var item in model.AdditionalData) {
                        if (!repo.InsertIntegrationAdditionalData(model.IntegrationId, item.Key, item.Value))
                            throw new ArgumentException("Failed to update the Integration Additional Data");
                    }
                }

                return model.IntegrationId;
            }
        }
        public async Task<long> InsertAsync(IntegrationModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);
                model.IntegrationId = await repo.InsertAsync(model, cancellationToken);

                if (model.IntegrationId < 1)
                    throw new ArgumentException("Failed to insert the Integration");

                await repo.DeleteIntegrationAdditionalDataAsync(model.IntegrationId, cancellationToken);
                if (model.AdditionalData != null) {
                    foreach (var item in model.AdditionalData) {
                        if (!await repo.InsertIntegrationAdditionalDataAsync(model.IntegrationId, item.Key, item.Value, cancellationToken))
                            throw new ArgumentException("Failed to update the Integration Additional Data");
                    }
                }
                return model.IntegrationId;
            }
        }
        public void Delete(IntegrationModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);

                repo.DeleteIntegrationAdditionalData(model.IntegrationId);

                if (!repo.DeleteById(model.IntegrationId))
                    throw new ArgumentException("Failed to delete the Integration");
            }
        }
        public async Task DeleteAsync(IntegrationModel model, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                var repo = RepoFactory.IntegrationRepo(uow);

                await repo.DeleteIntegrationAdditionalDataAsync(model.IntegrationId, cancellationToken);

                if (!await repo.DeleteByIdAsync(model.IntegrationId, cancellationToken))
                    throw new ArgumentException("Failed to delete the Integration");
            }
        }


        public void ValidateModel(IntegrationModel model)
        {
            if (model.IntegrationType == 0) throw new ArgumentException("IntegrationType is not set", "IntegrationType");
            if (model.BaseUrl.Empty()) throw new FeedbackException("BaseUrl is not set", "BaseUrl");
        }
    }
}
