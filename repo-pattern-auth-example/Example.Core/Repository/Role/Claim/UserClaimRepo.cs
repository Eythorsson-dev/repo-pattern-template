using Example.Domain.Model.Role.Claim;
using Example.Domain.Request.Role.Claim;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;

namespace Example.Core.Repository.Role.Claim
{
    internal class RoleClaimRepo : BaseRepository
    {
        public RoleClaimRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(RoleClaimFilterRequest request)
        {
            string sql = $@"
                SELECT 
                    RC.[RoleClaimId], RC.[RoleId], RC.[ClaimType], RC.[ClaimValue]
                FROM [ROLE_CLAIM_TAB] RC
            ";

            var searchParam = new List<string>();

            if (request.RoleClaimId > 0) searchParam.Add("RC.[RoleClaimId] = @RoleClaimId");
            if (request.RoleId > 0) searchParam.Add("RC.[RoleId] = @RoleId");

            if (!request.ClaimType.Empty()) searchParam.Add("RC.[ClaimType] = @ClaimType");
            if (!request.ClaimValue.Empty()) searchParam.Add("RC.[ClaimValue] = @ClaimValue");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            return sql;
        }

        internal List<RoleClaimModel> GetList(RoleClaimFilterRequest request)
        {
            return DbGetList<RoleClaimModel>(GetSql(request), request);
        }
        internal Task<List<RoleClaimModel>> GetListAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<RoleClaimModel>(GetSql(request), request, cancellationToken);
        }

        internal RoleClaimModel FirstOrDefault(RoleClaimFilterRequest request)
        {
            return DbGetFirstOrDefault<RoleClaimModel>(GetSql(request), request);
        }
        internal Task<RoleClaimModel> FirstOrDefaultAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<RoleClaimModel>(GetSql(request), request, cancellationToken);
        }

        internal RoleClaimModel SingleOrDefault(RoleClaimFilterRequest request)
        {
            return DBGetSingleOrDefault<RoleClaimModel>(GetSql(request), request);
        }
        internal Task<RoleClaimModel> SingleOrDefaultAsync(RoleClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<RoleClaimModel>(GetSql(request), request, cancellationToken);
        }

        private readonly string InsertSql = @"
                INSERT INTO [ROLE_CLAIM_TAB] (
                    [RoleId], [ClaimType], [ClaimValue]
                )
                OUTPUT INSERTED.[RoleClaimId]
                VALUES (
                    @RoleId, @ClaimType, @ClaimValue
                )
            ";
        internal long Insert(RoleClaimModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(RoleClaimModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [ROLE_CLAIM_TAB] 
            WHERE [RoleClaimId] = @roleClaimId
        ";
        internal bool DeleteById(long roleClaimId)
        {
            return DbDelete(DeleteSql, new { roleClaimId });
        }
        internal Task<bool> DeleteByIdAsync(long roleClaimId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { roleClaimId }, cancellationToken);
        }
    }
}
