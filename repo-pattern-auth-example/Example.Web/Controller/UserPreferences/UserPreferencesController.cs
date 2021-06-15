using Example.Controller;
using Example.Core.Service.User.Preference;
using Example.Domain.Enum;
using Example.Web.Config.Mapper;
using Example.Web.Dto.User.Preference;
using Microsoft.AspNetCore.Mvc;

namespace Example.Web.Controller.Account.Preferences
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
