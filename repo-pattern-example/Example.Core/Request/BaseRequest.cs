
namespace Example.Core.Request
{
    public abstract class BaseRequest<T>
    {
        //public virtual long CurrentClientId { get; set; }
        public bool OrderByDesc { get; set; }
        public T OrderBy { get; set; }
        internal string OrderBySqlDirection => OrderByDesc ? "DESC" : "ASC";
    }
}
