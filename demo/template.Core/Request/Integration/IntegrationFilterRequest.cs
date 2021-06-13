using template.Domain.Enum.Integration;

namespace template.Core.Request.Integration
{
    public class IntegrationFilterRequest : BaseRequestPaged<IntegrationOrderByEnum>
    {
        public long IntegrationId { get; set; }
        public IntegrationTypeEnum IntegrationType { get; set; }
    }

    public enum IntegrationOrderByEnum
    {
        IntegrationType = 1 
    }
}
