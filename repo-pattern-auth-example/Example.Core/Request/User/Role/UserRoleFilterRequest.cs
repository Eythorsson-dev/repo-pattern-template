using System;
using System.Collections.Generic;
using System.Text;

namespace Example.Core.Request.User.Role
{
    public class UserRoleFilterRequest
    {
        public long UserId { get; set; }
        public long RoleId { get; set; }
    }
}
