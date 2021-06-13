namespace template.Domain.Model.User
{
    public class UserRoleModel : PagedModel
    {
        public long UserId { get; private set; }
        public long RoleId { get; private set; }
        
        private UserRoleModel() {}

        public UserRoleModel(long userId, long roleId)
        {
            UserId = userId;
            RoleId = roleId; 
        }
    }
}
