using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;
using template.Core.Request.Role;
using template.Domain;
using template.Domain.Model.Role;

namespace template.Core.Repository.Role
{
    internal class RoleRepo : BaseRepository
    {
        public RoleRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(RoleFilterRequest request, bool usePaging = false)
        {
            string sql = $@"
                SELECT 
                    R.[RoleId], R.[Name], R.[Description], R.[ClientId]
                    {UsePagingColumn(usePaging)}
                FROM [ROLE_TAB] R
                    LEFT OUTER JOIN [USER_ROLE_TAB] UR ON UR.[RoleId] = R.[RoleId]
            ";

            if (request.RoleId > 0) {
                sql += "WHERE R.[RoleId] = @RoleId";
                return sql;
            }

            var searchParam = new List<string>();

            //if (request.CurrentClientId > 0) searchParam.Add("R.[ClientId] = @ClientId");
            if (request.UserId > 0) searchParam.Add("UR.[UserId] = @UserId");

            if (!request.NameExact.Empty()) searchParam.Add("R.[Name] = @NameExact");

            if (!request.Name.Empty()) searchParam.Add("R.[Name] LIKE '%' + @Name + '%'");
            if (!request.Description.Empty()) searchParam.Add("R.[Description] LIKE '%' + @Description + '%'");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            sql += $@"
                GROUP BY 
                    R.[RoleId], R.[Name], R.[Description], R.[ClientId]

                ORDER BY    
                    CASE WHEN @OrderBy = {(int)RoleOrderByEnum.Name} THEN R.[Name] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)RoleOrderByEnum.Description} THEN R.[Description] END {request.OrderBySqlDirection}

                {UsePagingOffset(usePaging)}
            ";

            return sql;
        }

        internal PagedModel<RoleModel> GetPagedList(RoleFilterRequest request)
        {
            return DbGetPagedList<RoleModel>(GetSql(request, usePaging: false), request);
        }

        internal List<RoleModel> GetList(RoleFilterRequest request)
        {
            return DbGetList<RoleModel>(GetSql(request, usePaging: false), request);

        }
        internal Task<List<RoleModel>> GetListAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<RoleModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal RoleModel FirstOrDefault(RoleFilterRequest request)
        {
            return DbGetFirstOrDefault<RoleModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<RoleModel> FirstOrDefaultAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<RoleModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal RoleModel SingleOrDefault(RoleFilterRequest request)
        {
            return DBGetSingleOrDefault<RoleModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<RoleModel> SingleOrDefaultAsync(RoleFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<RoleModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        private readonly string UpdateSql = @"
                UPDATE [Role_TAB] SET
                    [Name] = @Name,
                    [Description] = @Description
                WHERE [RoleId] = @RoleId
            ";
        internal bool Update(RoleModel model)
        {
            return DbUpdate(UpdateSql, GetDynamicParameters(model));
        }
        internal Task<bool> UpdateAsync(RoleModel model, CancellationToken cancellationToken)
        {
            return DbUpdateAsync(UpdateSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string InsertSql = @"
                INSERT INTO [Role_TAB] (
                    [Name], [Description], [ClientId]
                )
                OUTPUT INSERTED.[RoleId]
                VALUES (
                    @Name, @Description, @ClientId
                )
            ";
        internal long Insert(RoleModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(RoleModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [Role_TAB] 
            WHERE [RoleId] = @RoleId
        ";
        internal bool DeleteById(long RoleId)
        {
            return DbDelete(DeleteSql, new { RoleId });
        }
        internal Task<bool> DeleteByIdAsync(long RoleId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { RoleId }, cancellationToken);
        }
    }
}
