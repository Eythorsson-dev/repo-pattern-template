using System;
using System.Collections.Generic;
using System.Text;
using template.Domain.Enum;

namespace template.Domain.Model.User.Preference
{
    public class UserPreferenceModel
    {
        public long UserId { get; set; }
        public UserPreferenceEnum PreferenceId { get; set; }
        public string UserPreferenceStr { get; set; }

        private  UserPreferenceModel(){ }

        public UserPreferenceModel(long userId, UserPreferenceEnum preferenceId, string userPreferenceStr)
        {
            UserId = userId;
            PreferenceId = preferenceId;
            UserPreferenceStr = userPreferenceStr;
        }
    }
}
