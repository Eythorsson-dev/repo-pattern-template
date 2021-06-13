using System.Collections.Generic;
using template.Core.ExternalApi.ExampleAuthApi.Dto.Data;
using template.Core.ExternalApi.ExampleAuthApi.Dto.Login;
using template.Domain.Model.Integration;

namespace template.Core.ExternalApi.ExtenalApiExample
{
    internal class ExampleAuthApi : BaseExternalApi
    {
        public ExampleAuthApi(IntegrationModel model) : base(model.BaseUrl, model.Token)
        {
        }

        public LoginResponseDto Login(LoginRequestDto request)
        {
            return HttpPost<LoginResponseDto>("login", request);
        }

        public List<OrderDto> GetOrderList(DataRequestDto request)
        {
            return HttpGet<List<OrderDto>>("example/external_order_system/order", request);
        }
        public OrderDto GetOrderById(long dataId)
        {
            return HttpGet<OrderDto>($"example/external_order_system/order/{dataId}");
        }
        public OrderDto CreateOrder(OrderDto dto)
        {
            return HttpPost<OrderDto>($"example/external_order_system/order", dto);
        }

        internal void DeleteOrder(string externalOrderId)
        {
            HttpDelete($"example/external_order_system/order/{externalOrderId}");
        }
    }
}