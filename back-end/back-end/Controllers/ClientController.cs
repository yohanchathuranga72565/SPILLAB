using back_end.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private IClientManager _clientManager;
        public ClientController(IClientManager clientManager)
        {
            _clientManager = clientManager;
        }

        [HttpGet]
        public IActionResult GetClients()
        {
            return Ok(_clientManager.GetClients());
        }

        [HttpGet("{dcLink}")]
        public IActionResult GetBasket(int dcLink)
        {
            var client = _clientManager.GetClient(dcLink);

            if (client != null)
            {
                return Ok(client);
            }
            return NotFound($"Basket with Id: {dcLink} was not found");

        }
    }
}
