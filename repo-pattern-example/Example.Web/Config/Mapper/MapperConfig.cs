using AutoMapper;
using AutoMapper.Configuration;
using Example.Web.Config.Mapper.Profiles;
using Example.Web.Dto;
using System.Collections.Generic;

namespace Example.Web.Config.Mapper
{
    public static class MapperConfig
    {
        public static IMapper Mapper { get; set; }

        public static void InitAutomapper()
        {
            var cfg = new MapperConfigurationExpression();
            cfg.AddProfile(new DefaultMapperProfile());

            var config = new MapperConfiguration(cfg);
            Mapper = config.CreateMapper();
        }
    }

    public static class Mapper
    {
        public static Destination Map<Destination>(object data)
        {
            return MapperConfig.Mapper.Map<Destination>(data);
        }
        public static List<Destination> MapList<Destination>(object data)
        {
            return MapperConfig.Mapper.Map<List<Destination>>(data);
        }
        public static PagedDto<Destination> MapPagedList<Destination>(dynamic data)
        {
            return new PagedDto<Destination>() {
                Items = MapList<Destination>(data.Items),
                CurrentPage = data.CurrentPage,
                TotalNumberOfItems = data.TotalNumberOfItems,
                ItemsPerPage = data.ItemsPerPage,
                TotalPages = data.TotalPages
            };
        }
    }
}
