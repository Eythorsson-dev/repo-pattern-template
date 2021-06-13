using System.Data.SqlClient;

namespace template.Core
{
    internal class UnitOfWorkProvider : IUnitOfWorkProvider
    {
        public static string SqlConnectionString { get; set; }
        private static SqlConnection SqlConnection => new SqlConnection(SqlConnectionString);

        public IUnitOfWork GetUnitOfWork(bool useTransaction = false)
        {
            return new UnitOfWork(SqlConnection, useTransaction);
        }
    }
}
