using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using template.Core.Repository;
using template.Core.Request.User.Role;
using template.Domain;
using template.Domain.Model.User;

namespace template.Core.Service.User.UserRole
{
    public class UserRoleService : BaseService
    {
        public UserRoleService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public List<UserRoleModel> GetList(UserRoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<UserRoleModel>> GetListAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public UserRoleModel FirstOrDefault(UserRoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<UserRoleModel> FirstOrDefaultAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public UserRoleModel SingleOrDefault(UserRoleFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<UserRoleModel> SingleOrDefaultAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }
        public void Insert(UserRoleModel model)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);

                if (!repo.Insert(model)) 
                    throw new ArgumentException("Failed to insert the UserRole");
            }
        }
        public async Task InsertAsync(UserRoleModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                
                if (!await repo.InsertAsync(model, cancellationToken)) 
                    throw new ArgumentException("Failed to insert the UserRole");
            }
        }
        public void Delete(UserRoleModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                if (!repo.DeleteById(model.UserId, model.RoleId))
                    throw new ArgumentException("Failed to delete the UserRole");
            }
        }
        public async Task DeleteAsync(UserRoleModel model, CancellationToken cancellationToken)
        {
            using(IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRoleRepo(uow);
                if (!await repo.DeleteByIdAsync(model.UserId, model.RoleId, cancellationToken))
                    throw new ArgumentException("Failed to delete the UserRole");
            }
        }


        public void ValidateModel(UserRoleModel model)
        {
            if (model.UserId > 0) throw new ArgumentException("UserId is not set", "UserId");
            if (model.RoleId > 0) throw new ArgumentException("RoleId is not set", "RoleId");
        }
    }
}
