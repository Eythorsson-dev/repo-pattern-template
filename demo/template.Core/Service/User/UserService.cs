using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using template.Core.Repository;
using template.Core.Request.User;
using template.Domain;
using template.Domain.Model.User;

namespace template.Core.Service.User
{
    public class UserService : BaseService
    {
        public UserService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public PagedModel<UserModel> GetPagedList(UserFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return repo.GetPagedList(request);
            }
        }
        public List<UserModel> GetList(UserFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<UserModel>> GetListAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public UserModel FirstOrDefault(UserFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<UserModel> FirstOrDefaultAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public UserModel SingleOrDefault(UserFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<UserModel> SingleOrDefaultAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }

        public UserModel GetById(long userId)
        {
            var request = new UserFilterRequest { UserId = userId };
            return FirstOrDefault(request);
        }

        public void Update(UserModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);

                if (!repo.Update(model))
                    throw new ArgumentException("Failed to update the user");
            }
        }
        public async Task UpdateAsync(UserModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);

                if (!await repo.UpdateAsync(model, cancellationToken))
                    throw new ArgumentException("Failed to update the user");
            }
        }

        public long Insert(UserModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                var id = repo.Insert(model);

                if (id < 1) throw new ArgumentException("Failed to insert the user");
                return id;
            }
        }
        public async Task<long> InsertAsync(UserModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                var id = await repo.InsertAsync(model, cancellationToken);
                
                if (id < 1) throw new ArgumentException("Failed to insert the user");
                return id;
            }
        }
        public void Delete(UserModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                if (!repo.DeleteById(model.UserId))
                    throw new ArgumentException("Failed to delete the user");
            }
        }
        public async Task DeleteAsync(UserModel model, CancellationToken cancellationToken)
        {
            using(IUnitOfWork uow = UowProvider.GetUnitOfWork())
            {
                var repo = RepoFactory.UserRepo(uow);
                if (!await repo.DeleteByIdAsync(model.UserId, cancellationToken))
                    throw new ArgumentException("Failed to delete the user");
            }
        }


        public void ValidateModel(UserModel model)
        {
            if (model.FirstName.Empty()) throw new FeedbackException("FirstName is not set", "FirstName");
            if (model.LastName.Empty()) throw new FeedbackException("LastName is not set", "LastName");
            if (model.Email.Empty()) throw new FeedbackException("Email is not set", "Email");
        }
    }
}
