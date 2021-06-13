using Microsoft.AspNetCore.Mvc;
using template.Controller;
using template.Core.Request.User.Preference;
using template.Core.Service.User.Preference;
using template.Domain.Enum;
using template.Domain.Model.User;
using template.Web.Config.Mapper;
using template.Web.Dto.Login;
using template.Web.Dto.Register;
using template.Web.Dto.User.Preference;

namespace template.Web.Controller.Account.Preferences
{
    [ApiController]
    [Route("api/user/{userId}/preferences")]
    public class UserPreferencesController : BaseController
    {
        private UserPreferenceService UserPreferenceService => Services.UserPreferenceService;

        [HttpGet("{preferenceId}")]
        public IActionResult GetById([FromRoute] UserPreferenceEnum preferenceId)
        {
            var model = UserPreferenceService.GetUserPreference(CurrentUser.UserId, preferenceId);
            var dto = Mapper.Map<UserPreferenceDto>(model);
            return Ok(dto);
        }

        [HttpPost("{preferenceId}")]
        public IActionResult Update([FromRoute] UserPreferenceEnum preferenceId, [FromBody] UserPreferenceDto dto)
        {
            if (preferenceId != dto.PreferenceId) return BadRequest();

            var model = UserPreferenceService.GetUserPreference(CurrentUser.UserId, preferenceId);
            model.UserPreferenceStr = dto.UserPreferenceStr;
            UserPreferenceService.Update(model);

            return Ok();
        }
    }
}
