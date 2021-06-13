namespace template.Core.Request.Role
{
    public class RoleFilterRequest : BaseRequestPaged<RoleOrderByEnum>
    {
        public long RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string NameExact { get; set; }

        // Aggregated
        public long UserId { get; set; }
    }

    public enum RoleOrderByEnum
    {
        Name = 1,
        Description = 2
    }
}
