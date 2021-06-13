namespace template.Domain.Request.User.Token
{
    public class UserTokenFilterRequest 
    {
        public long UserId { get; set; }
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
