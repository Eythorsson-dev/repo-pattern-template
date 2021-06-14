using System;
using System.Collections.Generic;

namespace Example.Domain
{
    public abstract class PagedModel
    {
        public int TotalNumberOfItems { get; set; }
    }

    public class PagedModel<T> where T : PagedModel
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalNumberOfItems { get; set; }
        public int TotalPages => Convert.ToInt32(Math.Ceiling((double)TotalNumberOfItems / ItemsPerPage));
        public List<T> Items { get; set; }
        public PagedModel()
        {
            Items = new List<T>();
        }
    }
}
