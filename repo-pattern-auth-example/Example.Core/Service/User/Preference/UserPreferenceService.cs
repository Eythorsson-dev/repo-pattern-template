using Example.Core.Repository;
using Example.Core.Request.User.Preference;
using Example.Domain.Enum;
using Example.Domain.Model.User.Preference;
using System;
using System.Collections.Generic;

namespace Example.Core.Service.User.Preference
{
    public class UserPreferenceService : BaseService
    {
        public UserPreferenceService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public List<UserPreferenceModel> GetList(UserPreferenceFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserPreferenceRepo(uow);
                return repo.GetList(request);
            }
        }

        public UserPreferenceModel GetUserPreference(long userId, UserPreferenceEnum preferenceId)
        {
            var request = new UserPreferenceFilterRequest() { UserId = userId, PreferenceId = preferenceId };
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserPreferenceRepo(uow);
                var model = repo.GetUserPreference(userId, preferenceId);

                if (model.UserId == 0) {
                    // IF THE UserId IS NOT SET HAVE THE USER NOT YET SET THE PREFERENCE AND THE 
                    // DEFUALT PREFERENCE SHOULD BE USED
                    model = new UserPreferenceModel(userId, preferenceId, model.UserPreferenceStr);
                    Insert(uow, model);
                }

                return model;
            }
        }

        public void Insert(UserPreferenceModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                Insert(uow, model);
            }
        }
        public void Insert(IUnitOfWork uow, UserPreferenceModel model)
        {
            ValidateModel(model);
            var repo = RepoFactory.UserPreferenceRepo(uow);

            if (!repo.Insert(model))
                throw new ArgumentException("Failed to insert the UserPreference");
        }

        public void Update(UserPreferenceModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserPreferenceRepo(uow);
                if (!repo.Update(model))
                    throw new ArgumentException("Failed to delete the UserPreference");
            }
        }

        public void Delete(UserPreferenceModel model)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.UserPreferenceRepo(uow);
                if (!repo.DeleteById(model.UserId, model.PreferenceId))
                    throw new ArgumentException("Failed to delete the UserPreference");
            }
        }

        public void ValidateModel(UserPreferenceModel model)
        {
            if (model.UserId < 1) throw new ArgumentException("UserId is not set", "UserId");
            if (model.PreferenceId == 0) throw new ArgumentException("PreferenceId is not set", "PreferenceId");
            if (model.UserPreferenceStr.Empty()) throw new ArgumentException("UserPreferenceStr is not set", "UserPreferenceStr");
        }
    }
}
