CREATE TABLE [dbo].[ORDER_TAB]
(
	[OrderId] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [OrderNo] VARCHAR(50) NOT NULL,
    [ProductNo] VARCHAR(50) NOT NULL, 
    [Quantity] DECIMAL(18, 2) NOT NULL, 
    [PriceExVat] DECIMAL(18, 2) NOT NULL, 
    [VatTotal] DECIMAL(18, 2) NOT NULL, 
    [ExternalOrderId] VARCHAR(50) NULL, 
    [isSynced] BIT NULL DEFAULT 0, 
    [SyncedAt] DATETIME NULL, 
    [CreatedAt] DATETIME NOT NULL, 
    [CreatedByUserId] BIGINT NOT NULL, 
    [CreatedByFirstName] VARCHAR(50) NOT NULL, 
    [CreatedByLastName] VARCHAR(50) NOT NULL
)
