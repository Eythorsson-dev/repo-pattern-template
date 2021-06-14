CREATE TABLE [dbo].[LOG_TAB]
(
	[LogId] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [LogLevel] INT NOT NULL, 
    [LogType] INT NOT NULL, 
    [LogDate] DATETIME NOT NULL, 
    [Message] VARCHAR(MAX) NOT NULL, 
    [Stacktrace] VARCHAR(MAX) NULL, 
    [ReferanceId] BIGINT NULL, 
    [ReferanceName] VARCHAR(50) NULL, 
    [ReferanceFriendlyName] VARCHAR(50) NULL, 
)
