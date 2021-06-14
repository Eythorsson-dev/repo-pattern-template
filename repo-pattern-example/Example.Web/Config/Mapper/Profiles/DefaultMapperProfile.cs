using AutoMapper;
using Example.Domain.Model.Order;
using Example.Web.Dto.Order;

namespace Example.Web.Config.Mapper.Profiles
{
    public class DefaultMapperProfile : Profile
    {
        public DefaultMapperProfile()
        {
            // ARTICLE
            //CreateMap<ArticleModel, LookupItemDto>()
            //   .ForMember(x => x.Id, y => y.MapFrom(m => m.ArticleId))

            // ORDER
            CreateMap<OrderModel, OrderDto>().ReverseMap();
        }
    }
}
