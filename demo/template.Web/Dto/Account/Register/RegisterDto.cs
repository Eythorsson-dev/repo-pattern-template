﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace template.Web.Dto.Register
{
    public class RegisterDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
    }
}
