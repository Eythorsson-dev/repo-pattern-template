using AutoMapper;
using template.Domain.Model.Order;
using template.Domain.Model.User;
using template.Domain.Model.User.Preference;
using template.Web.Dto.Order;
using template.Web.Dto.User;
using template.Web.Dto.User.Preference;

namespace template.Web.Config.Mapper.Profiles
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
