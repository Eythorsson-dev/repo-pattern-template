using System;
using template.Core.ExternalApi.ExampleAuthApi.Dto.Data;
using template.Core.ExternalApi.ExampleAuthApi.Dto.Login;
using template.Core.ExternalApi.ExtenalApiExample;
using template.Core.Repository;
using template.Core.Request.Integration;
using template.Domain.Enum.Integration;
using template.Domain.Model.Order;

namespace template.Core.Service.Integration
{
    public class Integration_ExampleAuthService : BaseService
    {
        private IntegrationService IntegrationService { get; }

        public Integration_ExampleAuthService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory,
            IntegrationService integrationService) : base(uowProvider, repoFactory)
        {
            IntegrationService = integrationService;
        }

        private ExampleAuthApi GetApi()
        {
            var integration = IntegrationService.FirstOrDefault(new IntegrationFilterRequest { IntegrationType = IntegrationTypeEnum.ExampleAuth });
            var api = new ExampleAuthApi(integration);

            if (integration.Token.Empty() || integration.TokenExpiresAt <= DateTime.Now) {
                // LOGIN TO GET A NEW TOKEN
                var loginRequest = new LoginRequestDto { Username = integration.Username, Password = integration.Password };
                var loginResponse = api.Login(loginRequest);

                // UPDATE THE DATABASE
                integration.Token = loginResponse.Token;
                integration.TokenExpiresAt = loginResponse.TokenExpiresUTC.ToLocalTime();
                integration.LastUpdatedAt = DateTime.Now;
                IntegrationService.Update(integration);

                // SET THE AUTH TOKEN
                api.SetAuthToken(integration.Token);
            }

            return api;
        }

        /// <returns>The ExternalOrderId</returns>
        public string SyncOrder(OrderModel model)
        {
            var api = GetApi();

            // MAP THE ORDER TO THE API DTO
            var orderDto = new OrderDto { 
                ProductNo = model.ProductNo,
                Quantity = model.Quantity,
                PriceIncVat = model.PriceExVat + model.VatTotal
            };

            // SEND THE REQUEST
            var response = api.CreateOrder(orderDto);

            // RETURN THE ExternalOrderId
            return response.ExternalOrderId;
        }

        /// <summary>
        /// Delete the order in the external api
        /// </summary>
        internal void DeleteOrder(OrderModel model)
        {
            var api = GetApi();
            api.DeleteOrder(model.ExternalOrderId);
        }
    }
}
