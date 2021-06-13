﻿CREATE TABLE [dbo].[INTEGRATION_ADDITIONAL_DATA_TAB]
(
	[IntegrationId] BIGINT NOT NULL PRIMARY KEY, 
    [IntegrationAdditionalData] INT NOT NULL, 
    [Value] VARCHAR(50) NOT NULL, 
    CONSTRAINT [FK_INTEGRATION_ADDITIONAL_DATA_TAB_INTEGRATION_TAB] FOREIGN KEY (IntegrationId) REFERENCES [INTEGRATION_TAB](IntegrationId), 
)