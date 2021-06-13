using template.Core.Repository.Integration;
using template.Core.Repository.Log;
using template.Core.Repository.Order;
using template.Core.Repository.Role;
using template.Core.Repository.Role.Claim;
using template.Core.Repository.User;
using template.Core.Repository.User.Claim;
using template.Core.Repository.User.Claim.Preference;
using template.Core.Repository.User.Role;

namespace template.Core.Repository
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
