using System.Globalization;

namespace template.Core
{
    public static class LongExtensions
    {
        public static string ToFormattedString(this long value)
        {
            return value.ToString("#,##0.00", CultureInfo.InvariantCulture).Replace(",", " ");
        }
    }
}
