CREATE TABLE [dbo].[ROLE_TAB] (
    [RoleId]      BIGINT        IDENTITY (1, 1) NOT NULL,
    [Name]        VARCHAR (50)  NOT NULL,
    [Description] VARCHAR (150) NOT NULL,
    [ClientId]    BIGINT        NOT NULL,
    CONSTRAINT [PK_ROLE_TAB] PRIMARY KEY CLUSTERED ([RoleId] ASC),
    CONSTRAINT [FK_ROLE_TAB_CLIENT_TAB] FOREIGN KEY ([ClientId]) REFERENCES [dbo].[CLIENT_TAB] ([ClientId])
);

