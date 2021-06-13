using System;
using System.Collections.Generic;
using System.Text;

namespace template.Core.Request.User.Role
{
    public class UserRoleFilterRequest
    {
        public long UserId { get; set; }
        public long RoleId { get; set; }
    }
}
