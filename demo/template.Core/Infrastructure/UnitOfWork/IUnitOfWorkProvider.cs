namespace template.Core
{
    public interface IUnitOfWorkProvider
    {
        IUnitOfWork GetUnitOfWork(bool useTransaction = false);
    }
}
