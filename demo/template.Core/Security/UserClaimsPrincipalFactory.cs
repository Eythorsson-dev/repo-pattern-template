using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Threading.Tasks;
using template.Domain.Model.Role;
using template.Domain.Model.User;

namespace template.Core.Security
{
    public class UserClaimsPrincipalFactory : UserClaimsPrincipalFactory<UserModel, RoleModel>
    {
        public UserClaimsPrincipalFactory(
            UserManager<UserModel> userManager,
            RoleManager<RoleModel> roleManager,
            IOptions<IdentityOptions> options)
            : base(userManager, roleManager, options)
        {

        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(UserModel user)
        {
            var identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim("LastName", user.LastName ?? ""));
            identity.AddClaim(new Claim("Email", user.Email ?? ""));
            
            if (user.IsEmailConfirmed)
                identity.AddClaim(new Claim("AccountVerified", "true"));

            return identity;
        }
    }
}
