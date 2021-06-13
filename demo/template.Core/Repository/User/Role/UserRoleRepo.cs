using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;
using template.Core.Request.User.Role;
using template.Domain.Model.User;

namespace template.Core.Repository.User.Role
{
    internal class UserRoleRepo : BaseRepository
    {
        public UserRoleRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(UserRoleFilterRequest request)
        {
            string sql = $@"
                SELECT 
                    UR.[RoleId], UR.[UserId]
                FROM [USER_ROLE_TAB] UR
            ";

            var searchParam = new List<string>();

            if (request.UserId > 0) searchParam.Add("UR.[UserId] = @UserId");
            if (request.RoleId > 0) searchParam.Add("UR.[RoleId] = @RoleId");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            return sql;
        }

        internal List<UserRoleModel> GetList(UserRoleFilterRequest request)
        {
            return DbGetList<UserRoleModel>(GetSql(request), request);

        }
        internal Task<List<UserRoleModel>> GetListAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<UserRoleModel>(GetSql(request), request, cancellationToken);
        }

        internal UserRoleModel FirstOrDefault(UserRoleFilterRequest request)
        {
            return DbGetFirstOrDefault<UserRoleModel>(GetSql(request), request);
        }
        internal Task<UserRoleModel> FirstOrDefaultAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<UserRoleModel>(GetSql(request), request, cancellationToken);
        }

        internal UserRoleModel SingleOrDefault(UserRoleFilterRequest request)
        {
            return DBGetSingleOrDefault<UserRoleModel>(GetSql(request), request);
        }
        internal Task<UserRoleModel> SingleOrDefaultAsync(UserRoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<UserRoleModel>(GetSql(request), request, cancellationToken);
        }


        private readonly string InsertSql = @"
                INSERT INTO [Role_TAB] (
                    [UserId], [RoleId]
                )
                VALUES (
                    @UserId, @RoleId
                )
            ";
        internal bool Insert(UserRoleModel model)
        {
            return DbInsert(InsertSql, GetDynamicParameters(model));
        }
        internal Task<bool> InsertAsync(UserRoleModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [Role_TAB] 
            WHERE [RoleId] = @roleId AND [UserId] = @userId
        ";
        internal bool DeleteById(long userId, long roleId)
        {
            return DbDelete(DeleteSql, new { userId, roleId });
        }
        internal Task<bool> DeleteByIdAsync(long userId, long roleId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { userId, roleId }, cancellationToken);
        }
    }
}
