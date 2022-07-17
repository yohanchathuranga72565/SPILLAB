using back_end.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StkItemController : ControllerBase
    {
        private IStkItemManager _stkItemManager;
        public StkItemController(IStkItemManager stkItemManager)
        {
            _stkItemManager = stkItemManager;
        }

        [HttpGet]
        public IActionResult GetStkItems()
        {
            return Ok(_stkItemManager.GetStkItems());
        }
    }
}
