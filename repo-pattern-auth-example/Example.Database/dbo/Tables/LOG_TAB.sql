CREATE TABLE [dbo].[LOG_TAB]
(
	[LogId] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [LogLevel] INT NOT NULL, 
    [LogType] INT NOT NULL, 
    [LogDate] DATETIME NOT NULL, 
    [Message] VARCHAR(MAX) NOT NULL, 
    [UserId] BIGINT NULL, 
    [Stacktrace] VARCHAR(MAX) NULL, 
    [ReferanceId] BIGINT NULL, 
    [ReferanceName] VARCHAR(50) NULL, 
    [ReferanceFriendlyName] VARCHAR(50) NULL, 
    CONSTRAINT [FK_LOG_TAB_USER_TAB] FOREIGN KEY ([UserId]) REFERENCES USER_TAB(UserId)
)
