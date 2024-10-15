using EPiServer.Find;
using EPiServer.Find.Api.Querying.Queries;
using System.Linq.Expressions;

namespace FEO.CMS.HBG.Business.ExtensionMethods
{
    public static class SearchExtensionMethods
    {
        public static ITypeSearch<T> WildcardSearch<T>(this ITypeSearch<T> search,
            string query, double? boost = null, params Expression<Func<T, string>>[] fieldSelectors)
        {
            query = query?.ToLowerInvariant();
            query = WrapInAsterisks(query);

            var wildcardQueries = new List<WildcardQuery>();

            // Create a wildcard query for each field
            foreach (var fieldSelector in fieldSelectors)
            {
                var fieldName = search.Client.Conventions
                    .FieldNameConvention
                    .GetFieldNameForAnalyzed(fieldSelector);

                var wildcardQuery = new WildcardQuery(fieldName, query)
                {
                    Boost = boost
                };

                wildcardQueries.Add(wildcardQuery);
            }

            return new Search<T, WildcardQuery>(search, context =>
            {
                var boolQuery = new BoolQuery();
                if (context.RequestBody.Query != null)
                {
                    boolQuery.Should.Add(context.RequestBody.Query);

                    // Add all wildcard queries to the BoolQuery
                    foreach (var wildcardQuery in wildcardQueries)
                    {
                        boolQuery.Should.Add(wildcardQuery);
                    }

                    boolQuery.MinimumNumberShouldMatch = 1;
                    context.RequestBody.Query = boolQuery;
                }
                else
                {
                    // Add all wildcard queries to the BoolQuery
                    foreach (var wildcardQuery in wildcardQueries)
                    {
                        boolQuery.Should.Add(wildcardQuery);
                    }
                    boolQuery.MinimumNumberShouldMatch = 1;
                    context.RequestBody.Query = boolQuery;
                }
            });
        }

        public static string WrapInAsterisks(string input)
        {
            return string.IsNullOrWhiteSpace(input) ? "*" : $"{input.Trim().Trim('*')}*";
        }
    }
}
