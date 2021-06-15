using Example.Domain.Enum.Integration;
using System;
using System.Collections.Generic;

namespace Example.Domain.Model.Integration
{
    public class IntegrationModel
    {
        public long IntegrationId { get; set; }
        public IntegrationTypeEnum IntegrationType { get; set; }
        public string BaseUrl { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public string Token { get; set; }
        public DateTime TokenExpiresAt { get; set; }
        public DateTime LastUpdatedAt { get; set; }

        public Dictionary<IntegrationAdditionalDataEnum, string> AdditionalData { get; set; }

        private IntegrationModel() { }
        public IntegrationModel(IntegrationTypeEnum integrationType, string baseUrl,
            string username = null, string password = null, string token = null, DateTime? tokenExpiresAt = null, DateTime? lastUpdatedAt = null,
            Dictionary<IntegrationAdditionalDataEnum, string> additionalData = null)
        {
            if (lastUpdatedAt == null) lastUpdatedAt = DateTime.Now;
            if (TokenExpiresAt == null) TokenExpiresAt = DateTime.MinValue;

            IntegrationType = integrationType;
            BaseUrl = baseUrl;
            Username = username;
            Password = password;
            Token = token;
            TokenExpiresAt = tokenExpiresAt.Value;
            LastUpdatedAt = lastUpdatedAt.Value;
            AdditionalData = additionalData;
        }
    }
}
