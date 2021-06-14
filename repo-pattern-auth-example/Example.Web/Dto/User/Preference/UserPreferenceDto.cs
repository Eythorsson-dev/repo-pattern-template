using Example.Domain.Enum;

namespace Example.Web.Dto.User.Preference
{
    public class UserPreferenceDto
    {
        public long UserId { get; set; }
        public UserPreferenceEnum PreferenceId { get; set; }
        public string UserPreferenceStr { get; set; }
    }
}
