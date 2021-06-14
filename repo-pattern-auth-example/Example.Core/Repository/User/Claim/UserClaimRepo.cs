using Example.Domain.Model.User.Claim;
using Example.Domain.Request.User.Claim;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;

namespace Example.Core.Repository.User.Claim
{
    internal class UserClaimRepo : BaseRepository
    {
        public UserClaimRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(UserClaimFilterRequest request)
        {
            string sql = $@"
                SELECT 
                    UC.[UserClaimId], UC.[UserId], UC.[ClaimType], UC.[ClaimValue]
                FROM [USER_CLAIM_TAB] UC
            ";

            var searchParam = new List<string>();

            if (request.UserClaimId > 0) searchParam.Add("UC.[UserClaimId] = @UserClaimId");
            if (request.UserId > 0) searchParam.Add("UC.[UserId] = @UserId");
            if (!request.ClaimType.Empty()) searchParam.Add("UC.[ClaimType] = @ClaimType");
            if (!request.ClaimValue.Empty()) searchParam.Add("UC.[ClaimValue] = @ClaimValue");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            return sql;
        }

        internal List<UserClaimModel> GetList(UserClaimFilterRequest request)
        {
            return DbGetList<UserClaimModel>(GetSql(request), request);
        }
        internal Task<List<UserClaimModel>> GetListAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<UserClaimModel>(GetSql(request), request, cancellationToken);
        }

        internal UserClaimModel FirstOrDefault(UserClaimFilterRequest request)
        {
            return DbGetFirstOrDefault<UserClaimModel>(GetSql(request), request);
        }
        internal Task<UserClaimModel> FirstOrDefaultAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<UserClaimModel>(GetSql(request), request, cancellationToken);
        }

        internal UserClaimModel SingleOrDefault(UserClaimFilterRequest request)
        {
            return DBGetSingleOrDefault<UserClaimModel>(GetSql(request), request);
        }
        internal Task<UserClaimModel> SingleOrDefaultAsync(UserClaimFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<UserClaimModel>(GetSql(request), request, cancellationToken);
        }


        private readonly string InsertSql = @"
                INSERT INTO [USER_CLAIM_TAB] (
                    [UserId], [ClaimType], [ClaimValue]
                )
                OUTPUT INSERTED.[UserClaimId]
                VALUES (
                    @UserId, @ClaimType, @ClaimValue
                )
            ";
        internal long Insert(UserClaimModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(UserClaimModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [USER_CLAIM_TAB] 
            WHERE 
                [UserClaimId] = @userClaimId
        ";

        internal bool DeleteById(long userClaimId)
        {
            return DbDelete(DeleteSql, new { userClaimId });
        }
        internal Task<bool> DeleteByIdAsync(long userClaimId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { userClaimId }, cancellationToken);
        }

    }
}
