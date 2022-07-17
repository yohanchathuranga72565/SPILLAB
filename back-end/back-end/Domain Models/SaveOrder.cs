using back_end.Models;
using System.Collections.Generic;

namespace back_end.Domain_Models
{
    public class SaveOrder
    {
        public Invoice InvoiceDetails { get; set; }

        public OrderItem[] Items { get; set; }
    }
}
