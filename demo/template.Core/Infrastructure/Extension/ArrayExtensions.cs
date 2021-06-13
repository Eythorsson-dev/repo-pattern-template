using System;
using System.Collections.Generic;
using System.Linq;

namespace Wise.Core
{
    public static class ArrayExtensions
    {
        public static bool Empty<T>(this T[] val)
        {
            return val == null || !val.Any();
        }

        public static string Join(this string[] list, string separator, bool ignoreEmpty = true)
        {
            if (list.Empty()) return "";

            list = list.Where(x => ignoreEmpty || !string.IsNullOrWhiteSpace(x)).ToArray();
            if (!list.Any()) return "";

            return string.Join(separator, list);
        }

        public static TResult[] SelectArray<TSource, TResult>(this IEnumerable<TSource> source, Func<TSource, int, TResult> selector)
        {
            return source.Select(selector).ToArray();
        }
        public static TSource[] WhereArray<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return source.Where(predicate).ToArray();
        }
    }
}
