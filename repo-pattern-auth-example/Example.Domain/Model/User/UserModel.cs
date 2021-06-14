
namespace Example.Domain.Model.User
{
    public class UserModel : PagedModel
    {
        public long UserId { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public string PhoneNumber { get; set; }

        public string PasswordHash { get; set; }
        //public long CurrentClientId { get; set; }
        public bool IsEmailConfirmed { get; set; }
        public bool IsPhoneNumberConfirmed { get; set; }
        public bool IsTwoFactorEnabled { get; set; }

        private UserModel() { }

        public UserModel(string firstName, string lastName, string email, string phoneNumber)
        {
            UserName = email.ToUpper();
            NormalizedUserName = email;

            FirstName = firstName;
            LastName = lastName;
            Email = email.ToUpper();
            NormalizedEmail = email;

            PhoneNumber = phoneNumber;
        }
    }
}
