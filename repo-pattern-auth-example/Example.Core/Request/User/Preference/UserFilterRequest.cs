using Example.Domain.Enum;

namespace Example.Core.Request.User.Preference
{
    public class UserPreferenceFilterRequest
    {
        public long UserId { get; set; }
        public UserPreferenceEnum PreferenceId { get; set; }
    }
}
