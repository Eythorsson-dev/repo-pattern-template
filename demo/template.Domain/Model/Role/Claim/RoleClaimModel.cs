namespace template.Domain.Model.Role.Claim
{
    public class RoleClaimModel
    {
        public long RoleClaimId { get; set; }
        public long RoleId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }

        private RoleClaimModel() { }

        public RoleClaimModel(long roleId, string claimType, string claimValue)
        {
            RoleId = roleId;
            ClaimType = claimType;
            ClaimValue = claimValue;
        }
    }
}
