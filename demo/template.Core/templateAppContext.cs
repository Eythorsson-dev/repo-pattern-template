using System;
using template.Core.Service;

namespace template.Core
{
    public class templateAppContext
    {
        public static templateAppContext Current;

        public readonly ServiceContext Services;

        public templateAppContext(ServiceContext serviceContext)
        {
            if (Current != null)
                throw new InvalidOperationException("TemplateAppContext is already initialized");
            Services = serviceContext;
        }
    }
}
