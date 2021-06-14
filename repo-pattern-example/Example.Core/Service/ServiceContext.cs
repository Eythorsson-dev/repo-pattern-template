using Example.Core.Repository;
using Example.Core.Service.Integration;
using Example.Core.Service.Log;
using Example.Core.Service.Order;

namespace Example.Core.Service
{
    public class ServiceContext
    {
        public LogService LogService { get; private set; }

        // INTEGRATIONS
        public Integration_ExampleAuthService Integration_ExampleAuthService { get; private set; }
        public IntegrationService IntegrationService { get; private set; }

        // ORDER
        public OrderService OrderService { get; private set; }


        public ServiceContext(string sqlConnectionString)
        {
            UnitOfWorkProvider.SqlConnectionString = sqlConnectionString;
            var uowProvider = new UnitOfWorkProvider();
            var repoFactory = new RepositoryFactory();

            LogService = new LogService(uowProvider, repoFactory);

            // INTEGRATIONS
            IntegrationService = new IntegrationService(uowProvider, repoFactory);
            Integration_ExampleAuthService = new Integration_ExampleAuthService(uowProvider, repoFactory, IntegrationService);

            // ORDER 
            OrderService = new OrderService(uowProvider, repoFactory, Integration_ExampleAuthService);

        }
    }
}
