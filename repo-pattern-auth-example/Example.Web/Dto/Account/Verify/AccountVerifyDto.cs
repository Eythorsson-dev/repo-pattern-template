﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example.Web.Dto.Account.Verify
{
    public class AccountVerifyDto
    {
        public string Email { get; set; }
        public string Code { get; set; }
    }
}