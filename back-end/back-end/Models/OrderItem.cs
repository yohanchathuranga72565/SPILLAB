using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models
{
    [Table("OrderItem")]
    public class OrderItem
    {
        [Key]
        public string OrderNo { get; set; }
        public int InvoiceNo { get; set; }

        public int StockLink { get; set; }

        public string Note { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }

        public double Tax { get; set; }

        public double ExclAmount { get; set; }

        public double TaxAmount { get; set; }

        public double InclAmount { get; set; }
    }
}
