using System.Collections.Generic;
using System.Data;
using System.Linq;
using Wise.Core;
using template.Core.Request.User.Preference;
using template.Domain.Enum;
using template.Domain.Model.User.Preference;

namespace template.Core.Repository.User.Claim.Preference
{
    internal class UserPreferenceRepo : BaseRepository
    {
        public UserPreferenceRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }
        private string GetSql(UserPreferenceFilterRequest request)
        {
            string sql = $@"
                SELECT 
                    UP.[UserId], UP.[PreferenceId], UP.[UserPreferenceStr]
                FROM [USER_PREFERENCE_TAB] UP
            ";

            var searchParam = new List<string>();

            if (request.UserId > 0) searchParam.Add("UP.[UserId] = @UserId");
            if (request.PreferenceId > 0) searchParam.Add("UP.[PreferenceId] = @PreferenceId");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            return sql;
        }
        internal List<UserPreferenceModel> GetList(UserPreferenceFilterRequest request)
        {
            return DbGetList<UserPreferenceModel>(GetSql(request), request);
        }

        /// <summary>
        /// GETS 
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="preferenceId"></param>
        /// <returns></returns>
        internal UserPreferenceModel GetUserPreference(long userId, UserPreferenceEnum preferenceId)
        {
            string sql = @"
                ;WITH PREF As (
                    SELECT 
                        UP.[UserId], UP.[PreferenceId], UP.[UserPreferenceStr]
                    FROM [USER_PREFERENCE_TAB] UP 
                    WHERE [UserId] = @userId AND [PreferenceId] = preferenceId
                    UNION ALL
                    SELECT 
                        UP.[UserId], UP.[PreferenceId], UP.[UserPreferenceStr]
                    FROM [USER_PREFERENCE_TAB] UP 
                    WHERE [UserId] IS NULL AND [PreferenceId] = preferenceId
                )
                SLC
                
            ";

            return DbGetFirstOrDefault<UserPreferenceModel>(sql, new { userId, preferenceId });
        }


        internal bool Update(UserPreferenceModel model)
        {
            string sql = @"
                UPDATE [USER_PREFERENCE_TAB] SET
                    [UserPreferenceStr] = @UserPreferenceStr
                WHERE
                    [UserId] = @UserId AND  
                    [PreferenceId] = @PreferenceId
            ";

            return DbInsert(sql, GetDynamicParameters(model));
        }

        internal bool Insert(UserPreferenceModel model)
        {
            string sql = @"
                INSERT INTO [USER_PREFERENCE_TAB] (
                    [UserId], [PreferenceId], [UserPreferenceStr]
                )
                VALUES (
                    @UserId, @PreferenceId, @UserPreferenceStr
                )
            ";

            return DbInsert(sql, GetDynamicParameters(model));
        }

        internal bool DeleteById(long userId, UserPreferenceEnum preferenceId)
        {
            string sql = @"
                DELETE FROM [USER_PREFERENCE_TAB] 
                WHERE 
                    [UserId] = @userId AND 
                    [PreferenceId] = @preferenceId 
            ";

            return DbDelete(sql, new { userId, preferenceId });
        }
    }
}
