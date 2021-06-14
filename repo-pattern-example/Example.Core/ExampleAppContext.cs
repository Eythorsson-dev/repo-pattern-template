using Example.Core.Service;
using System;

namespace Example.Core
{
    public class ExampleAppContext
    {
        public static ExampleAppContext Current;

        public readonly ServiceContext Services;

        public ExampleAppContext(ServiceContext serviceContext)
        {
            if (Current != null)
                throw new InvalidOperationException("TagItAppContext is already initialized");
            Services = serviceContext;
        }
    }
}
