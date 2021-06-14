using System;
using System.Collections.Generic;
using System.Text;

namespace Example.Core.Request.User
{
    public class UserFilterRequest : BaseRequestPaged<UserOrderByEnum>
    {
        public long UserId { get; set; }
        public List<long> UserIds { get; set; }
        public string UserName { get; set; }
        public string UserNameExact { get; set; }
        internal string NormalizedUsername { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public string EmailExact { get; set; }
        public string NormalizedEmail { get; set; }

        public string PhoneNumber { get; set; }
    }

    public enum UserOrderByEnum
    {
        UserName = 1,
        FullName = 2,
        Email = 3,
        PhoneNumber = 4
    }
}
