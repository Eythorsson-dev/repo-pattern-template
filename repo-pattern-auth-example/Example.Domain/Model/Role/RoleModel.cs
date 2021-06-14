
namespace Example.Domain.Model.Role
{
    public class RoleModel : PagedModel
    {
        public long RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long ClientId { get; set; }

        private RoleModel() { }

        public RoleModel(string name, string description, long clientId)
        {
            Name = name;
            Description = description;
            ClientId = clientId;
        }
    }
}
