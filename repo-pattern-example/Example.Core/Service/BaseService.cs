using Example.Core.Repository;
using Example.Core.Service.Log;

namespace Example.Core.Service
{
    public abstract class BaseService
    {
        protected readonly IUnitOfWorkProvider UowProvider;
        protected readonly RepositoryFactory RepoFactory;

        protected LogService LogService => Core.ExampleAppContext.Current.Services.LogService;

        public BaseService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory)
        {
            UowProvider = uowProvider;
            RepoFactory = repoFactory;
        }
    }
}
