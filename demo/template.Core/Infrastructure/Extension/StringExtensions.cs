namespace template.Core
{
    public static class StringExtensions
    {
        public static bool Matches(this string str, string value, bool ignoreCase = true, bool trim = true, bool allowWhitespace = false, bool allowEmpty = false)
        {
            bool isValid = true;
            if (isValid && !allowWhitespace) isValid = string.IsNullOrWhiteSpace(value);
            else if (isValid && !allowEmpty) isValid = string.IsNullOrEmpty(value);

            if (isValid && ignoreCase)
            {
                str = str.ToLower();
                value = value.ToLower();
            }

            if (isValid && trim)
            {
                str = str.Trim();
                value = value.Trim();
            }

            return isValid && str == value;
        }

        public static bool Empty(this string str, bool allowWhiteSpace = false)
        {
            if (allowWhiteSpace) return string.IsNullOrEmpty(str);
            return string.IsNullOrWhiteSpace(str);
        }
    }
}
