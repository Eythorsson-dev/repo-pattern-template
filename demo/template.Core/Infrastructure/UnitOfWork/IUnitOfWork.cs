using System;
using System.Data;

namespace template.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IDbConnection IDbConnection { get; }
        IDbTransaction IDbTransaction { get; }
        void Commit();
    }
}
