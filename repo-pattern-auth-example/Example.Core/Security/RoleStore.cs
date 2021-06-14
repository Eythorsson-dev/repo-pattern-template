using Example.Core.Request.Role;
using Example.Core.Service;
using Example.Core.Service.Role;
using Example.Domain.Model.Role;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;

namespace Example.Core.Security
{
    public class RoleStore : IRoleStore<RoleModel>
    {
        private ServiceContext Services => ExampleAppContext.Current.Services;
        private RoleService RoleService => Services.RoleService;

        public async Task<IdentityResult> CreateAsync(RoleModel role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            await RoleService.InsertAsync(role, cancellationToken);

            return IdentityResult.Success;
        }

        public async Task<IdentityResult> UpdateAsync(RoleModel role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            await RoleService.UpdateAsync(role, cancellationToken);

            return IdentityResult.Success;
        }

        public async Task<IdentityResult> DeleteAsync(RoleModel role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            await RoleService.DeleteAsync(role, cancellationToken);

            return IdentityResult.Success;
        }

        public Task<string> GetRoleIdAsync(RoleModel role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.RoleId.ToString());
        }

        public Task<string> GetRoleNameAsync(RoleModel role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.Name);
        }

        public Task SetRoleNameAsync(RoleModel role, string roleName, CancellationToken cancellationToken)
        {
            role.Name = roleName;
            return Task.FromResult(0);
        }

        public Task<string> GetNormalizedRoleNameAsync(RoleModel role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.Description);
        }

        public Task SetNormalizedRoleNameAsync(RoleModel role, string normalizedName, CancellationToken cancellationToken)
        {
            role.Description = normalizedName;
            return Task.FromResult(0);
        }

        public async Task<RoleModel> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            var role_req = new RoleFilterRequest { RoleId = long.Parse(roleId) };
            return await RoleService.FirstOrDefaultAsync(role_req, cancellationToken);
        }

        public async Task<RoleModel> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();


            var role_req = new RoleFilterRequest { Name = normalizedRoleName };
            return await RoleService.FirstOrDefaultAsync(role_req, cancellationToken);
        }

        public void Dispose()
        {
            // Nothing to dispose.
        }
    }
}
