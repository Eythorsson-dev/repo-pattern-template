
using Example.Controller;
using Example.Core;
using Example.Core.Service.Mail;
using Example.Domain.Model.User;
using Example.Web.Config.Mapper;
using Example.Web.Dto.Account.ForgotPassword;
using Example.Web.Dto.Account.ResetPassword;
using Example.Web.Dto.Account.Verify;
using Example.Web.Dto.Login;
using Example.Web.Dto.Register;
using Example.Web.Dto.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace Example.Web.Controller.Account
{
    [Authorize]
    [ApiController]
    [Route("api/account")]
    public class AccountController : BaseController
    {
        private readonly UserManager<UserModel> UserManager;
        private readonly SignInManager<UserModel> SignInManager;
        private MailService MailService => Services.MailService;

        public AccountController(
            UserManager<UserModel> userManager,
            SignInManager<UserModel> signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var result = await SignInManager.PasswordSignInAsync(dto.Email, dto.Password, dto.RememberMe, lockoutOnFailure: false);
            if (!result.Succeeded)
                throw new FeedbackException("Incorrect Username and/or password");

            return Ok();
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            var user = new UserModel(dto.FirstName, dto.LastName, dto.Email, dto.PhoneNumber);
            var result = await UserManager.CreateAsync(user, dto.Password);

            if (!result.Succeeded)
                throw new FeedbackException(result.Errors.ToList().First().Description);

            var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);
            await MailService.SendEmailConfirmationAsync(dto.Email, code);

            await SignInManager.SignInAsync(user, isPersistent: false);
            return Ok();

        }

        [HttpPost("logout")]
        [AllowAnonymous]
        public async Task<IActionResult> Logout()
        {
            await SignInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost("getCurrent")]
        public async Task<IActionResult> GetCurrent()
        {
            var user = await UserManager.GetUserAsync(User);
            var userDto = Mapper.Map<UserDto>(user);
            return Ok(userDto);
        }

        [HttpPost("passwordForgot")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordDto dto)
        {
            var user = await UserManager.FindByEmailAsync(dto.Email);
            if (user == null)
                // Don't revel that the user does not exist
                return Ok();

            if (!user.IsEmailConfirmed)
                return BadRequest("The account is not confirmed, please check your mail inbox");

            var code = await UserManager.GeneratePasswordResetTokenAsync(user);
            await MailService.SendPasswordResetAsync(dto.Email, code);

            return Ok();
        }

        [HttpPost("passwordReset")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto dto)
        {
            var user = await UserManager.FindByEmailAsync(dto.Email);
            if (user == null)
                return Ok(); // Don't reveal that the user does not exist

            var result = await UserManager.ResetPasswordAsync(user, dto.Code, dto.Password);
            if (!result.Succeeded)
                throw new FeedbackException(result.Errors.ToList().First().Description);

            return Ok();
        }

        [HttpPost("resendAccountVerify")]
        public async Task<IActionResult> ResendAccountVerifyCode()
        {
            var user = await UserManager.GetUserAsync(User);
            var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);
            await MailService.SendEmailConfirmationAsync(user.Email, code);
            return Ok();
        }

        [HttpPost("accountVerify")]
        public async Task<IActionResult> VerifyAccount(AccountVerifyDto dto)
        {
            var user = await UserManager.FindByEmailAsync(dto.Email);
            if (user == null)
                return Ok(); // Don't reveal that the user does not exist

            var result = await UserManager.ConfirmEmailAsync(user, dto.Code);
            if (!result.Succeeded)
                throw new FeedbackException(result.Errors.ToList().First().Description);

            return Ok();

        }
    }
}
