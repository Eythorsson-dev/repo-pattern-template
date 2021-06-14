
namespace Example.Domain.Request.User.Claim
{
    public class UserClaimFilterRequest
    {
        public long UserClaimId { get; set; }
        public long UserId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}
