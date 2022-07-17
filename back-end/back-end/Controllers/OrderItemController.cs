using back_end.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : ControllerBase
    {
        private IOrderItemManager _orderItemManager;
        public OrderItemController(IOrderItemManager orderItemManager)
        {
            _orderItemManager = orderItemManager;
        }

        [HttpGet]
        public IActionResult GetOrderItems()
        {
            return Ok(_orderItemManager.GetOrderItems());
        }
    }
}
