using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace template.Web.Dto
{
    public class PagedDto<T>
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalNumberOfItems { get; set; }
        public int TotalPages { get; set; }
        public List<T> Items { get; set; }

        public PagedDto()
        {
            Items = new List<T>();
        }
    }
}
