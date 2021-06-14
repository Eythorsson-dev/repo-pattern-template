using Example.Core.Request.Integration;
using Example.Domain.Enum.Integration;
using Example.Domain.Model.Integration;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;

namespace Example.Core.Repository.Integration
{
    internal class IntegrationRepo : BaseRepository
    {
        public IntegrationRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(IntegrationFilterRequest request, bool usePaging = false)
        {
            string sql = $@"
                SELECT 
                    I.[IntegrationId], I.[IntegrationType], I.[BaseUrl], I.[Username], I.[Password], I.[Token], I.[TokenExpiresAt], I.[LastUpdatedAt]
                    {UsePagingColumn(usePaging)}
                FROM [INTEGRATION_TAB] I
            ";

            if (request.IntegrationId > 0) {
                sql += "WHERE I.[IntegrationId] = @IntegrationId";
                return sql;
            }

            var searchParam = new List<string>();

            if (request.IntegrationType > 0) searchParam.Add("I.[IntegrationType] = @IntegrationType");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            sql += $@"
                ORDER BY    
                    CASE WHEN @OrderBy = {(int)IntegrationOrderByEnum.IntegrationType} THEN I.[IntegrationType] END {request.OrderBySqlDirection}

                {UsePagingOffset(usePaging)}
            ";

            return sql;
        }

        internal List<IntegrationModel> GetList(IntegrationFilterRequest request)
        {
            return DbGetList<IntegrationModel>(GetSql(request, usePaging: false), request);

        }
        internal Task<List<IntegrationModel>> GetListAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<IntegrationModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal IntegrationModel FirstOrDefault(IntegrationFilterRequest request)
        {
            return DbGetFirstOrDefault<IntegrationModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<IntegrationModel> FirstOrDefaultAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<IntegrationModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal IntegrationModel SingleOrDefault(IntegrationFilterRequest request)
        {
            return DBGetSingleOrDefault<IntegrationModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<IntegrationModel> SingleOrDefaultAsync(IntegrationFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<IntegrationModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        private readonly string UpdateSql = @"
                UPDATE [INTEGRATION_TAB] SET
                    [BaseUrl] = @BaseUrl,
                    [Username] = @Username,
                    [Password] = @Password,
                    [Token] = @Token,
                    [TokenExpiresAt] = @TokenExpiresAt,
                    [LastUpdatedAt] = @LastUpdatedAt,
                WHERE 
                    [IntegrationId] = @IntegrationId AND
                    [IntegrationType] = @IntegrationType 
            ";
        internal bool Update(IntegrationModel model)
        {
            return DbUpdate(UpdateSql, GetDynamicParameters(model));
        }
        internal Task<bool> UpdateAsync(IntegrationModel model, CancellationToken cancellationToken)
        {
            return DbUpdateAsync(UpdateSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string InsertSql = @"
                INSERT INTO [INTEGRATION_TAB] (
                    [IntegrationType], [BaseUrl], [Username], [Password], [Token], [TokenExpiresAt], [LastUpdatedAt]
                )
                OUTPUT INSERTED.[IntegrationId]
                VALUES (
                    @IntegrationType, @BaseUrl, @Username, @Password, @Token, @TokenExpiresAt, @LastUpdatedAt
                )
            ";
        internal long Insert(IntegrationModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(IntegrationModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }

        private readonly string DeleteSql = @"
            DELETE FROM [INTEGRATION_TAB] 
            WHERE 
                [IntegrationId] = @IntegrationId AND
                [IntegrationType] = @IntegrationType
        ";
        internal bool DeleteById(long IntegrationId)
        {
            return DbDelete(DeleteSql, new { IntegrationId });
        }
        internal Task<bool> DeleteByIdAsync(long IntegrationId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteSql, new { IntegrationId }, cancellationToken);
        }


        // ADDITIONAL DATA
        // ADDITIONAL DATA
        private readonly string GetAdditionalDataSql = @"
            SELECT IAD.[IntegrationAdditionalData], IAD.[Value]
            FROM [INTEGRATION_ADDITIONAL_DATA_TAB] IAD
            WHERE IAD.[IntegrationId] = @integrationId
        ";
        internal async Task<Dictionary<IntegrationAdditionalDataEnum, string>> GetIntegrationAdditionalDataAsync(long integrationId, CancellationToken cancellationToken)
        {
            var items = await DbGetListAsync<(IntegrationAdditionalDataEnum IntegrationAdditionalData, string Value)>(GetAdditionalDataSql, new { integrationId }, cancellationToken);
            return items.ToDictionary(x => x.IntegrationAdditionalData, x => x.Value);
        }
        internal Dictionary<IntegrationAdditionalDataEnum, string> GetIntegrationAdditionalData(long integrationId)
        {
            var items = DbGetList<(IntegrationAdditionalDataEnum IntegrationAdditionalData, string Value)>(GetAdditionalDataSql, new { integrationId });
            return items.ToDictionary(x => x.IntegrationAdditionalData, x => x.Value);
        }


        private readonly string InsertAdditionalDataSql = @"
            INSERT INTO [INTEGRATION_ADDITIONAL_DATA_TAB] (
                [IntegrationId], [IntegrationAdditionalData], [Value]
            )
            VALUES (
                @integrationId, @integrationAdditionalData, @value
            )
        ";
        internal Task<bool> InsertIntegrationAdditionalDataAsync(long integrationId, IntegrationAdditionalDataEnum integrationAdditionalData, string value, CancellationToken cancellationToken)
        {
            var data = new { integrationId, integrationAdditionalData, value };
            return DbInsertAsync(InsertAdditionalDataSql, GetDynamicParameters(data), cancellationToken);
        }
        internal bool InsertIntegrationAdditionalData(long integrationId, IntegrationAdditionalDataEnum integrationAdditionalData, string value)
        {
            var data = new { integrationId, integrationAdditionalData, value };
            return DbInsert(InsertAdditionalDataSql, GetDynamicParameters(data));
        }

        private readonly string DeleteAdditionalDataSql = @"
            DELETE FROM [INTEGRATION_ADDITIONAL_DATA_TAB]
            WHERE IAD.[IntegrationId] = @integrationId
        ";
        internal Task DeleteIntegrationAdditionalDataAsync(long integrationId, CancellationToken cancellationToken)
        {
            return DbDeleteAsync(DeleteAdditionalDataSql, new { integrationId }, cancellationToken);
        }
        internal void DeleteIntegrationAdditionalData(long integrationId)
        {
            DbDelete(DeleteAdditionalDataSql, new { integrationId });
        }


    }
}
