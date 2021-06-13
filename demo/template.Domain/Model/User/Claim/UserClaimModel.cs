namespace template.Domain.Model.User.Claim
{
    public class UserClaimModel
    {
        public long UserClaimId { get; set; }
        public long UserId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }

        private UserClaimModel() { }

        public UserClaimModel(long userId, string claimType, string claimValue)
        {
            UserId = userId;
            ClaimType = claimType;
            ClaimValue = claimValue;
        }
    }
}
