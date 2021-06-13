using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace template.Web.Dto.Login
{
    public class LoginWith2faDto
    {
        public string TwoFactorCode { get; set; }
        public bool RememberMachine { get; set; }
        public bool RememberMe { get; set; }
    }
}
