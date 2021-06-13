using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;
using template.Core.Request.User;
using template.Domain;
using template.Domain.Model.User;

namespace template.Core.Repository.User
{
    internal class UserRepo : BaseRepository
    {
        public UserRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(UserFilterRequest request, bool usePaging = false)
        {
            string sql = $@"
                SELECT 
                    U.[UserId], U.[UserName], U.[NormalizedUserName], U.[FirstName], U.[LastName], U.[Email], U.[NormalizedEmail], U.[PhoneNumber], 
                    U.[PasswordHash], U.[IsEmailConfirmed], U.[IsPhoneNumberConfirmed], U.[IsTwoFactorEnabled]
                    {UsePagingColumn(usePaging)}
                FROM [USER_TAB] U
            ";

            if (request.UserId > 0) {
                sql += "WHERE U.[UserId] = @UserId";
                return sql;
            }

            var searchParam = new List<string>();

            if (!request.UserNameExact.Empty()) searchParam.Add("U.[UserName] = @UserNameExact");
            if (!request.EmailExact.Empty()) searchParam.Add("U.[Email] = @EmailExact");

            if (!request.UserName.Empty()) searchParam.Add("U.[UserName] LIKE '%' + @UserName + '%'");
            if (!request.FirstName.Empty()) searchParam.Add("U.[FirstName] LIKE '%' + @FirstName + '%'");
            if (!request.LastName.Empty()) searchParam.Add("U.[LastName] LIKE '%' + @LastName + '%'");
            if (!request.Email.Empty()) searchParam.Add("U.[Email] LIKE '%' + @Email + '%'");
            if (!request.PhoneNumber.Empty()) searchParam.Add("U.[PhoneNumber] LIKE '%' + @PhoneNumber + '%'");

            if (!request.UserIds.Empty()) searchParam.Add("U.[UserId] IN @UserIds");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            sql += $@"
                ORDER BY    
                    CASE WHEN @OrderBy = {(int)UserOrderByEnum.UserName} THEN U.[UserName] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)UserOrderByEnum.FullName} THEN U.[FirstName] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)UserOrderByEnum.FullName} THEN U.[LastName] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)UserOrderByEnum.Email} THEN U.[Email] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)UserOrderByEnum.PhoneNumber} THEN U.[PhoneNumber] END {request.OrderBySqlDirection}

                {UsePagingOffset(usePaging)}
            ";

            return sql;
        }

        internal PagedModel<UserModel> GetPagedList(UserFilterRequest request)
        {
            return DbGetPagedList<UserModel>(GetSql(request, usePaging: false), request);
        }

        internal List<UserModel> GetList(UserFilterRequest request)
        {
            return DbGetList<UserModel>(GetSql(request, usePaging: false), request);

        }
        internal Task<List<UserModel>> GetListAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<UserModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal UserModel FirstOrDefault(UserFilterRequest request)
        {
            return DbGetFirstOrDefault<UserModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<UserModel> FirstOrDefaultAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<UserModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal UserModel SingleOrDefault(UserFilterRequest request)
        {
            return DBGetSingleOrDefault<UserModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<UserModel> SingleOrDefaultAsync(UserFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<UserModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        private readonly string UpdateSql = @"
                UPDATE [USER_TAB] SET
                    [FirstName] = @FirstName,
                    [LastName] = @LastName,
                    [PasswordHash] = @PasswordHash,
                    [Email] = @Email,
                    [NormalizedEmail] = @NormalizedEmail,
                    [UserName] = @UserName,
                    [NormalizedUserName] = @NormalizedUserName,
                    [IsEmailConfirmed] = @IsEmailConfirmed,
                    [IsPhoneNumberConfirmed] = @IsPhoneNumberConfirmed,
                    [IsTwoFactorEnabled] = @IsTwoFactorEnabled
                WHERE [UserId] = @UserId
            ";
        internal bool Update(UserModel model)
        {
            return DbUpdate(UpdateSql, GetDynamicParameters(model));
        }
        internal Task<bool> UpdateAsync(UserModel model, CancellationToken cancellationToken)
        {
            return DbUpdateAsync(UpdateSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string InsertSql = @"
                INSERT INTO [USER_TAB] (
                    [UserName], [NormalizedUserName], [FirstName], [LastName], [Email], [NormalizedEmail], [PhoneNumber], [PasswordHash], [IsEmailConfirmed], 
                    [IsPhoneNumberConfirmed], [IsTwoFactorEnabled]
                )
                OUTPUT INSERTED.[UserId]
                VALUES (
                    @UserName, @NormalizedUserName, @FirstName, @LastName, @Email, @NormalizedEmail, @PhoneNumber, @PasswordHash, @IsEmailConfirmed, 
                    @IsPhoneNumberConfirmed, @IsTwoFactorEnabled
                )
            ";
        internal long Insert(UserModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(UserModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [USER_TAB] 
            WHERE [UserId] = @userId
        ";
        internal bool DeleteById(long userId)
        {
            return DbDelete(DeleteSql, new { userId });
        }
        internal Task<bool> DeleteByIdAsync(long userId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { userId }, cancellationToken);
        }
    }
}
