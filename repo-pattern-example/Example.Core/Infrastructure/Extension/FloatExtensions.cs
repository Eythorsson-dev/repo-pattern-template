using System.Globalization;

namespace Example.Core
{
    public static class FloatExtensions
    {
        public static string ToFormattedString(this float value)
        {
            return value.ToString("#,##0.00", CultureInfo.InvariantCulture).Replace(",", " ");
        }
    }
}
