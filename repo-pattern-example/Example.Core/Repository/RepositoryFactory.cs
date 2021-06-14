using Example.Core.Repository.Integration;
using Example.Core.Repository.Log;
using Example.Core.Repository.Order;

namespace Example.Core.Repository
{
    public class RepositoryFactory
    {
        // LOG
        internal LogRepo LogRepo(IUnitOfWork uow) => new LogRepo(uow.IDbConnection, uow.IDbTransaction);

        // INTEGRATION
        internal IntegrationRepo IntegrationRepo(IUnitOfWork uow) => new IntegrationRepo(uow.IDbConnection, uow.IDbTransaction);

        // ORDER
        internal OrderRepo OrderRepo(IUnitOfWork uow) => new OrderRepo(uow.IDbConnection, uow.IDbTransaction);

    }
}
