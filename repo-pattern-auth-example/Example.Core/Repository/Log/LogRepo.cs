using Example.Core.Request.Log;
using Example.Domain;
using Example.Domain.Model.Log;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Wise.Core;

namespace Example.Core.Repository.Log
{
    internal class LogRepo : BaseRepository
    {
        public LogRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(LogFilterRequest request, bool usePaging = false)
        {
            string sql = $@"
                SELECT 
                    L.[LogId], L.[LogLevel], L.[LogType], L.[LogDate], L.[UserId], L.[Message], L.[Stacktrace], L.[ReferanceId], L.[ReferanceName], L.[ReferanceFriendlyName]
                    {UsePagingColumn(usePaging)}
                FROM [LOG_TAB] L
            ";

            if (request.LogId > 0) {
                sql += "WHERE L.[LogId] = @LogId";
                return sql;
            }

            var searchParam = new List<string>();

            //if (request.CurrentClientId > 0) searchParam.Add("L.[ClientId] = @ClientId");
            if (request.LogLevel > 0) searchParam.Add("L.[LogLevel] = @LogLevel");
            if (request.LogType > 0) searchParam.Add("L.[LogType] = @LogType");
            if (request.UserId > 0) searchParam.Add("L.[UserId] = @UserId");

            if (request.LogDate > DateTime.MinValue) searchParam.Add("L.[LogDate] = @LogDate");


            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            sql += $@"
                ORDER BY    
                    CASE WHEN @OrderBy = {(int)LogOrderByEnum.LogLevel} THEN L.[LogLevel] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)LogOrderByEnum.LogType} THEN L.[LogType] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)LogOrderByEnum.LogDate} THEN L.[LogDate] END {request.OrderBySqlDirection}

                {UsePagingOffset(usePaging)}
            ";

            return sql;
        }

        internal PagedModel<LogModel> GetPagedList(LogFilterRequest request)
        {
            return DbGetPagedList<LogModel>(GetSql(request, usePaging: false), request);
        }

        internal List<LogModel> GetList(LogFilterRequest request)
        {
            return DbGetList<LogModel>(GetSql(request, usePaging: false), request);

        }
        internal Task<List<LogModel>> GetListAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetListAsync<LogModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal LogModel FirstOrDefault(LogFilterRequest request)
        {
            return DbGetFirstOrDefault<LogModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<LogModel> FirstOrDefaultAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            return DbGetFirstOrDefaultAsync<LogModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        internal LogModel SingleOrDefault(LogFilterRequest request)
        {
            return DBGetSingleOrDefault<LogModel>(GetSql(request, usePaging: false), request);
        }
        internal Task<LogModel> SingleOrDefaultAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            return DBGetSingleOrDefaultAsync<LogModel>(GetSql(request, usePaging: false), request, cancellationToken);
        }

        private readonly string InsertSql = @"
                INSERT INTO [Log_TAB] (
                    [LogLevel], [LogType], [LogDate], [UserId], [Message], [Stacktrace], [ReferanceId], [ReferanceName], [ReferanceFriendlyName]
                )
                OUTPUT INSERTED.[LogId]
                VALUES (
                    @LogLevel, @LogType, @LogDate, @UserId, @Message, @Stacktrace, @ReferanceId, @ReferanceName, @ReferanceFriendlyName
                )
            ";
        internal long Insert(LogModel model)
        {
            return DbInsert<long>(InsertSql, GetDynamicParameters(model));
        }
        internal Task<long> InsertAsync(LogModel model, CancellationToken cancellationToken)
        {
            return DbInsertAsync<long>(InsertSql, GetDynamicParameters(model), cancellationToken);
        }
    }
}
