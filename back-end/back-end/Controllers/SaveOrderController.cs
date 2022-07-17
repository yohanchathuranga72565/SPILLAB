using back_end.Domain_Models;
using back_end.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaveOrderController : ControllerBase
    {
        private IOrderItemManager _orderItemManager;

        private IInvoiceManager _invoiceManager;

        public SaveOrderController(IInvoiceManager invoiceManager, IOrderItemManager orderItemManager) { 
            _orderItemManager = orderItemManager;
            _invoiceManager = invoiceManager;   
        }

        [HttpPost]
        public IActionResult SaveOrder(SaveOrder order)
        {
            try
            {
                _invoiceManager.AddInvoice(order.InvoiceDetails);

                foreach (var item in order.Items)
                {
                    _orderItemManager.AddOrderItem(item);
                }

                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + order.InvoiceDetails.InvoiceNo, order);
            }
            catch (Exception e) {
                return BadRequest();
            }
        }

        [HttpPatch]
        public IActionResult EditOrder(SaveOrder order)
        {
            try
            {
                foreach (var item in order.Items)
                {
                    var exiting_orderItems = _orderItemManager.GetOrderItems().Where(x => x.InvoiceNo == item.InvoiceNo).ToList();
                    if (exiting_orderItems != null)
                    {
                        foreach (var orderItem in exiting_orderItems)
                        {
                            item.OrderNo = orderItem.OrderNo;
                            _orderItemManager.EditOrderItem(orderItem);
                        }

                    }
                    else
                    {
                        return NotFound($"Invoice Item was not found");
                    }
                }
                _invoiceManager.EditInvoice(order.InvoiceDetails);
                return Ok();
            }
            catch (Exception e) {
                return NotFound($"Invoice Item was not found");
            }

        }


    }
}
