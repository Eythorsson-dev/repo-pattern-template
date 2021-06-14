using Example.Core.Repository;
using Example.Core.Request.Role;
using Example.Domain;
using Example.Domain.Model.Role;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Example.Core.Service.Role
{
    public class RoleService : BaseService
    {
        public RoleService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public PagedModel<RoleModel> GetPagedList(RoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return repo.GetPagedList(request);
            }
        }
        public List<RoleModel> GetList(RoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<RoleModel>> GetListAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public RoleModel FirstOrDefault(RoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<RoleModel> FirstOrDefaultAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public RoleModel SingleOrDefault(RoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<RoleModel> SingleOrDefaultAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }

        public RoleModel GetById(long RoleId)
        {
            var request = new RoleFilterRequest { RoleId = RoleId };
            return FirstOrDefault(request);
        }

        public void Update(RoleModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);

                if (!repo.Update(model))
                    throw new ArgumentException("Failed to update the Role");
            }
        }
        public async Task UpdateAsync(RoleModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);

                if (!await repo.UpdateAsync(model, cancellationToken))
                    throw new ArgumentException("Failed to update the Role");
            }
        }

        public long Insert(RoleModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                var id = repo.Insert(model);

                if (id < 1) throw new ArgumentException("Failed to insert the Role");
                return id;
            }
        }
        public async Task<long> InsertAsync(RoleModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                var id = await repo.InsertAsync(model, cancellationToken);

                if (id < 1) throw new ArgumentException("Failed to insert the Role");
                return id;
            }
        }
        public void Delete(RoleModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                if (!repo.DeleteById(model.RoleId))
                    throw new ArgumentException("Failed to delete the Role");
            }
        }
        public async Task DeleteAsync(RoleModel model, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.RoleRepo(uow);
                if (!await repo.DeleteByIdAsync(model.RoleId, cancellationToken))
                    throw new ArgumentException("Failed to delete the Role");
            }
        }


        public void ValidateModel(RoleModel model)
        {
            if (model.ClientId > 0) throw new ArgumentException("ClientId is not set", "ClientId");
            if (model.Name.Empty()) throw new FeedbackException("Name is not set", "Name");
        }
    }
}
