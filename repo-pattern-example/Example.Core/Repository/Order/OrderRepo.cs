using Example.Core.Request.Order;
using Example.Domain;
using Example.Domain.Model.Order;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Wise.Core;

namespace Example.Core.Repository.Order
{
    internal class OrderRepo : BaseRepository
    {
        public OrderRepo(IDbConnection dbConnection, IDbTransaction dbTransaction) : base(dbConnection, dbTransaction)
        {
        }

        private string GetSql(OrderFilterRequest request, bool usePaging = false)
        {
            string sql = $@"
                SELECT 
                    O.[OrderId], O.[OrderNo], O.[ExternalOrderId], O.[IsSynced], O.[SyncedAt], O.[ProductNo], O.[Quantity], 
                    O.[PriceExVat], O.[VatTotal], O.[CreatedAt]
                    {UsePagingColumn(usePaging)}
                FROM [ORDER_TAB] O
            ";

            if (request.OrderId > 0) {
                sql += "WHERE O.[OrderId] = @OrderId";
                return sql;
            }

            var searchParam = new List<string>();

            if (request.VatTotalFrom > 0) searchParam.Add("O.[VatTotal] = @VatTotalFrom");
            if (request.PriceExVatTo > 0) searchParam.Add("O.[PriceExVat] = @PriceExVatTo");
            if (request.PriceExVatFrom > 0) searchParam.Add("O.[PriceExVat] = @PriceExVatFrom");
            if (request.VatTotalTo > 0) searchParam.Add("O.[VatTotal] = @VatTotalTo");

            if (!request.ExternalOrderId.Empty()) searchParam.Add("O.[ExternalOrderId] = @ExternalOrderId");
            if (!request.ProductNoExact.Empty()) searchParam.Add("O.[ProductNo] = @ProductNoExact");

            if (request.isSynced.HasValue) searchParam.Add("O.[IsSynced] = @IsSynced");

            if (!request.ProductNo.Empty()) searchParam.Add("O.[ProductNo] LIKE '%' + @ProductNo + '%'");

            if (request.SyncedAtFrom > DateTime.MinValue) searchParam.Add("O.[SyncedAt] >= @SyncedAtFrom");
            if (request.SyncedAtTo > DateTime.MinValue) searchParam.Add("O.[SyncedAt] <= @SyncedAtTo");
            if (request.CreatedAtFrom > DateTime.MinValue) searchParam.Add("O.[CreatedAt] >= @CreatedAtFrom");
            if (request.CreatedAtTo > DateTime.MinValue) searchParam.Add("O.[CreatedAt] <= @CreatedAtAtTo");

            if (searchParam.Any()) sql += "WHERE " + searchParam.Join(" AND ");

            sql += $@"
                ORDER BY    
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.ExternalOrderId} THEN O.[ExternalOrderId] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.ProductNo} THEN O.[ProductNo] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.Quantity} THEN O.[Quantity] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.PriceExVat} THEN O.[PriceExVat] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.VatTotal} THEN O.[VatTotal] END {request.OrderBySqlDirection},
                    CASE WHEN @OrderBy = {(int)OrderOrderByEnum.CreatedAt} THEN O.[CreatedAt] END {request.OrderBySqlDirection}

                {UsePagingOffset(usePaging)}
            ";

            return sql;
        }

        internal PagedModel<OrderModel> GetPagedList(OrderFilterRequest request)
        {
            return DbGetPagedList<OrderModel>(GetSql(request, usePaging: true), request);
        }

        internal List<OrderModel> GetList(OrderFilterRequest request)
        {
            return DbGetList<OrderModel>(GetSql(request, usePaging: false), request);

        }

        internal OrderModel FirstOrDefault(OrderFilterRequest request)
        {
            return DbGetFirstOrDefault<OrderModel>(GetSql(request, usePaging: false), request);
        }

        internal OrderModel SingleOrDefault(OrderFilterRequest request)
        {
            return DBGetSingleOrDefault<OrderModel>(GetSql(request, usePaging: false), request);
        }

        internal bool Update(OrderModel model)
        {
            string sql = @"
                UPDATE [ORDER_TAB] SET
                    [ExternalOrderId] = @ExternalOrderId,
                    [IsSynced] = @IsSynced,
                    [SyncedAt] = @SyncedAt
                WHERE [OrderId] = @OrderId
            ";

            return DbUpdate(sql, GetDynamicParameters(model));
        }

        internal long Insert(OrderModel model)
        {
            string sql = @"
                INSERT INTO [ORDER_TAB] (
                    [OrderNo], [ExternalOrderId], [IsSynced], [SyncedAt], [ProductNo], [Quantity], [PriceExVat], 
                    [VatTotal], [CreatedAt]
                )
                OUTPUT INSERTED.[OrderId]
                VALUES (
                    @OrderNo, @ExternalOrderId, @IsSynced, @SyncedAt, @ProductNo, @Quantity, @PriceExVat, 
                    @VatTotal, @CreatedAt
                )
            ";

            return DbInsert<long>(sql, GetDynamicParameters(model));
        }

        internal bool DeleteById(long OrderId)
        {
            string sql = @"
                DELETE FROM [ORDER_TAB] 
                WHERE [OrderId] = @OrderId
            ";

            return DbDelete(sql, new { OrderId });
        }
    }
}
