﻿CREATE TABLE [dbo].[CLIENT_TAB] (
    [ClientId] BIGINT       IDENTITY (1, 1) NOT NULL,
    [Name]     VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_CLIENT_TAB] PRIMARY KEY CLUSTERED ([ClientId] ASC)
);
