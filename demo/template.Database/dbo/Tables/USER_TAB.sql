CREATE TABLE [dbo].[USER_TAB] (
    [UserId]                 BIGINT         IDENTITY (1, 1) NOT NULL,
    [UserName]               NVARCHAR (50)  NOT NULL,
    [NormalizedUserName] NVARCHAR(50) NOT NULL, 
    [FirstName]              NVARCHAR (50)  NOT NULL,
    [LastName]               NVARCHAR (50)  NOT NULL,
    [Email]                  NVARCHAR (50)  NULL,
    [NormalizedEmail] NVARCHAR(50) NOT NULL, 
    [PhoneNumber]            NVARCHAR (10)  NULL,
    [PasswordHash]           NVARCHAR (MAX) NULL,
    [CurrentClientId]        BIGINT         NULL,
    [IsEmailConfirmed]       BIT            NOT NULL,
    [IsPhoneNumberConfirmed] BIT            NOT NULL,
    [IsTwoFactorEnabled]     BIT            NOT NULL,
    CONSTRAINT [PK_USER_TAB] PRIMARY KEY CLUSTERED ([UserId] ASC),
    CONSTRAINT [FK_USER_TAB_CLIENT_TAB] FOREIGN KEY ([CurrentClientId]) REFERENCES [dbo].[CLIENT_TAB] ([ClientId])
);

