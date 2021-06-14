using System;
using System.ComponentModel;
using System.Globalization;
using System.Linq;

namespace Example.Core
{
    public static class GetDescriptionAttribute
    {
        /// <summary>
        /// This is an extension method that gives us the abilaty to get the description attribute on 
        /// an enum. 
        /// <br />
        /// <strong>Example: </strong>
        /// EnumTrackingCompany.Bring.GetDescription(), this will get the description attribute and in 
        /// this case "Bring" as it is, in this case, used to provide the name of the tracking company
        /// </summary>
        public static string GetDescription<T>(this T e)
            where T : IConvertible
        {
            if (e is Enum) {
                Type type = e.GetType();
                var values = Enum.GetValues(type);

                foreach (int val in values) {
                    if (val == e.ToInt32(CultureInfo.InvariantCulture)) {
                        var memInfo = type.GetMember(type.GetEnumName(val));
                        var descAttr = memInfo[0]
                            .GetCustomAttributes(typeof(DescriptionAttribute), false)
                            .FirstOrDefault() as DescriptionAttribute;

                        if (descAttr != null)
                            return descAttr.Description;

                    }
                }
            }

            return null;
        }
    }
}
