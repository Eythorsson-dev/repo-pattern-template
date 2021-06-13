using System;
using System.Collections.Generic;
using System.Linq;

namespace Wise.Core
{
    public static class ListExtensions
    {
        public static bool Empty<T>(this List<T> val)
        {
            return val == null || !val.Any();
        }   

        public static string Join(this List<string> list, string separator, bool ignoreEmpty = true)
        {
            if (list.Empty()) return "";

            list = list.WhereList(x => ignoreEmpty || !string.IsNullOrWhiteSpace(x));
            if (!list.Any()) return "";

            return string.Join(separator, list);
        }

        public static List<TResult> SelectList<TSource, TResult>(this IEnumerable<TSource> source, Func<TSource, int, TResult> selector)
        {
            return source.Select(selector).ToList();
        }
        public static List<TResult> SelectList<TSource, TResult>(this IEnumerable<TSource> source, Func<TSource, TResult> selector)
        {
            return source.Select(selector).ToList();
        }
        public static List<TSource> WhereList<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return source.Where(predicate).ToList();
        }
    }
}
