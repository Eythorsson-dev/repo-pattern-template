CREATE TABLE [dbo].[USER_PREFERENCE_MODEL]
(
	[UserId] BIGINT NOT NULL PRIMARY KEY, 
    [PreferenceId] INT NOT NULL, 
    [UserPreferenceStr] VARCHAR(50) NOT NULL, 
    CONSTRAINT [FK_USER_PREFERENCE_TAB_USER_TAB] FOREIGN KEY ([UserId]) REFERENCES [dbo].[USER_TAB]([UserId])
)
