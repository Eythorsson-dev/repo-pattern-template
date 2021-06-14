using Example.Core.Repository.Integration;
using Example.Core.Repository.Log;
using Example.Core.Repository.Order;
using Example.Core.Repository.Role;
using Example.Core.Repository.Role.Claim;
using Example.Core.Repository.User;
using Example.Core.Repository.User.Claim;
using Example.Core.Repository.User.Claim.Preference;
using Example.Core.Repository.User.Role;

namespace Example.Core.Repository
{
    public class RepositoryFactory
    {
        // LOG
        internal LogRepo LogRepo(IUnitOfWork uow) => new LogRepo(uow.IDbConnection, uow.IDbTransaction);

        // INTEGRATION
        internal IntegrationRepo IntegrationRepo(IUnitOfWork uow) => new IntegrationRepo(uow.IDbConnection, uow.IDbTransaction);

        // ROLE
        internal RoleRepo RoleRepo(IUnitOfWork uow) => new RoleRepo(uow.IDbConnection, uow.IDbTransaction);
        internal RoleClaimRepo RoleClaimRepo(IUnitOfWork uow) => new RoleClaimRepo(uow.IDbConnection, uow.IDbTransaction);

        // USER
        internal UserClaimRepo UserClaimRepo(IUnitOfWork uow) => new UserClaimRepo(uow.IDbConnection, uow.IDbTransaction);
        internal UserPreferenceRepo UserPreferenceRepo(IUnitOfWork uow) => new UserPreferenceRepo(uow.IDbConnection, uow.IDbTransaction);
        internal UserRoleRepo UserRoleRepo(IUnitOfWork uow) => new UserRoleRepo(uow.IDbConnection, uow.IDbTransaction);
        internal UserRepo UserRepo(IUnitOfWork uow) => new UserRepo(uow.IDbConnection, uow.IDbTransaction);

        // ORDER
        internal OrderRepo OrderRepo(IUnitOfWork uow) => new OrderRepo(uow.IDbConnection, uow.IDbTransaction);

    }
}
