using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using template.Core.Repository;
using template.Domain.Model.User.Claim;
using template.Domain.Request.User.Claim;

namespace template.Core.Service.User.Claim
{
    public class UserClaimService : BaseService
    {
        public UserClaimService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public List<UserClaimModel> GetList(UserClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<UserClaimModel>> GetListAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public UserClaimModel FirstOrDefault(UserClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<UserClaimModel> FirstOrDefaultAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public UserClaimModel SingleOrDefault(UserClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<UserClaimModel> SingleOrDefaultAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }
        public void Insert(UserClaimModel model)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);

                if (repo.Insert(model) < 1)
                    throw new ArgumentException("Failed to insert the UserClaim");
            }
        }
        internal async Task InsertAsync(IUnitOfWork uow, UserClaimModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);
            var repo = RepoFactory.UserClaimRepo(uow);

            if (await repo.InsertAsync(model, cancellationToken) < 1)
                throw new ArgumentException("Failed to insert the UserClaim");
        }
        public async Task InsertAsync(UserClaimModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                await InsertAsync(uow, model, cancellationToken);
            }
        }
        public async Task InsertAsync(List<UserClaimModel> models, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                foreach (var model in models)
                    await InsertAsync(uow, model, cancellationToken);

                uow.Commit();
            }
        }
        public void Delete(UserClaimModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserClaimRepo(uow);
                if (!repo.DeleteById(model.UserClaimId))
                    throw new ArgumentException("Failed to delete the UserClaim");
            }
        }

        internal async Task DeleteAsync(IUnitOfWork uow, UserClaimModel model, CancellationToken cancellationToken)
        {
            var repo = RepoFactory.UserClaimRepo(uow);
            if (!await repo.DeleteByIdAsync(model.UserClaimId, cancellationToken))
                throw new ArgumentException("Failed to delete the UserClaim");
        }
        public async Task DeleteAsync(UserClaimModel model, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                await DeleteAsync(uow, model, cancellationToken);
            }
        }
        public async Task DeleteAsync(List<UserClaimModel> models, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork(useTransaction: true)) {
                foreach (var model in models)
                    await DeleteAsync(uow, model, cancellationToken);
            }
        }


        public void ValidateModel(UserClaimModel model)
        {
            if (model.UserId < 1) throw new ArgumentException("UserId is not set", "UserId");
            if (model.UserId < 1) throw new ArgumentException("ClaimId is not set", "ClaimId");
            if (model.ClaimType.Empty()) throw new ArgumentException("ClaimType is not set", "ClaimType");
        }
    }
}
