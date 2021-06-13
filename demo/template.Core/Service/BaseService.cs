using template.Core.Repository;
using template.Core.Service.Log;

namespace template.Core.Service
{
    public abstract class BaseService
    {
        protected readonly IUnitOfWorkProvider UowProvider;
        protected readonly RepositoryFactory RepoFactory;

        protected LogService LogService => Core.templateAppContext.Current.Services.LogService;
        
        public BaseService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory)
        {
            UowProvider = uowProvider;
            RepoFactory = repoFactory;
        }
    }
}
