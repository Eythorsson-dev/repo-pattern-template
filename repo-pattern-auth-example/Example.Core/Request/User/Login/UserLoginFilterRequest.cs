
namespace Example.Domain.Request.User.Login
{
    public class UserLoginFilterRequest
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string ProviderDisplayName { get; set; }
        public long UserId { get; set; }
    }
}
