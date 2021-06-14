using AutoMapper;
using Example.Domain.Model.Order;
using Example.Domain.Model.User;
using Example.Domain.Model.User.Preference;
using Example.Web.Dto.Order;
using Example.Web.Dto.User;
using Example.Web.Dto.User.Preference;

namespace Example.Web.Config.Mapper.Profiles
{
    public class DefaultMapperProfile : Profile
    {
        public DefaultMapperProfile()
        {
            // ARTICLE
            //CreateMap<ArticleModel, LookupItemDto>()
            //   .ForMember(x => x.Id, y => y.MapFrom(m => m.ArticleId))

            // USER
            CreateMap<UserPreferenceModel, UserPreferenceDto>().ReverseMap();
            CreateMap<UserModel, UserDto>().ReverseMap();

            // ORDER
            CreateMap<OrderModel, OrderDto>().ReverseMap();
        }
    }
}
