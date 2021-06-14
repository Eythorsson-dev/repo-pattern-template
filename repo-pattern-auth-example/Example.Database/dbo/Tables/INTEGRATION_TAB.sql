CREATE TABLE [dbo].[INTEGRATION_TAB]
(
	[IntegrationId] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [IntegrationType] NCHAR(10) NOT NULL, 
    [BaseUrl] VARCHAR(50) NOT NULL, 
    [Username] VARCHAR(50) NULL, 
    [Password] VARCHAR(50) NULL, 
    [Token] VARCHAR(50) NULL, 
    [TokenExpiresAt] DATETIME NULL, 
    [LastUpdatedAt] DATETIME NOT NULL
)
