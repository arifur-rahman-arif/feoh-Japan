namespace FEO.CMS.HBG.Business.ExtensionMethods
{
    public static class EnumerableExtension
    {
        public static void ForEach<T>(this IEnumerable<T> list, Action<T> onLoop)
        {
            if (onLoop == null)
                return;
            if (list == null || !list.Any())
                return;

            foreach (var item in list)
                onLoop.Invoke(item);
        }
        public static bool IsNotNullAndAny<T>(this IEnumerable<T> list)
        {
            return list != null && list.Any();
        }
        public static IEnumerable<TResult> Each<TSource, TResult>(this IEnumerable<TSource> list, Func<TSource, int, TResult> onLoop)
        {
            if (list == null)
                yield break;
            if (onLoop == null)
                yield break;

            for (int index = 0, count = list.Count(); index < count; ++index)
            {
                var item = list.ElementAt(index);
                var result = onLoop.Invoke(item, index);
                yield return result;
            }
        }
    }
}
