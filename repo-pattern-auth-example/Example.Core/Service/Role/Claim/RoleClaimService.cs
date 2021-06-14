using Example.Core.Repository;
using Example.Domain.Model.Role.Claim;
using Example.Domain.Request.Role.Claim;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Example.Core.Service.Role.Claim
{
    public class RoleClaimService : BaseService
    {
        public RoleClaimService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public List<RoleClaimModel> GetList(RoleClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<RoleClaimModel>> GetListAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public RoleClaimModel FirstOrDefault(RoleClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<RoleClaimModel> FirstOrDefaultAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public RoleClaimModel SingleOrDefault(RoleClaimFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<RoleClaimModel> SingleOrDefaultAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }
        public void Insert(RoleClaimModel model)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);

                if (repo.Insert(model) < 1)
                    throw new ArgumentException("Failed to insert the RoleClaim");
            }
        }
        public async Task InsertAsync(RoleClaimModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);

                if (await repo.InsertAsync(model, cancellationToken) < 1)
                    throw new ArgumentException("Failed to insert the RoleClaim");
            }
        }
        public void Delete(RoleClaimModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                if (!repo.DeleteById(model.RoleClaimId))
                    throw new ArgumentException("Failed to delete the RoleClaim");
            }
        }
        public async Task DeleteAsync(RoleClaimModel model, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleClaimRepo(uow);
                if (!await repo.DeleteByIdAsync(model.RoleClaimId, cancellationToken))
                    throw new ArgumentException("Failed to delete the RoleClaim");
            }
        }


        public void ValidateModel(RoleClaimModel model)
        {
            if (model.RoleId < 1) throw new ArgumentException("RoleId is not set", "RoleId");
            if (model.RoleId < 1) throw new ArgumentException("ClaimId is not set", "ClaimId");
            if (model.ClaimType.Empty()) throw new ArgumentException("ClaimType is not set", "ClaimType");
        }
    }
}
