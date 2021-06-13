using System.Globalization;

namespace template.Core
{
    public static class IntExtensions
    {
        public static string ToFormattedString(this int value)
        {
            return value.ToString("#,##0.00", CultureInfo.InvariantCulture).Replace(",", " ");
        }
    }
}
