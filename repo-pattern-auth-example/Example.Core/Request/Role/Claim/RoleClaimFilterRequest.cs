
namespace Example.Domain.Request.Role.Claim
{
    public class RoleClaimFilterRequest
    {
        public long RoleClaimId { get; set; }
        public long RoleId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}
