using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models
{
    [Table("Invoice")]
    public class Invoice
    {
        [Key]
        public int InvoiceNo { get; set; }

        public string InvoiceDate { get; set; }

        public int? ReferenceNo { get; set; }

        public double? TotalExcl { get; set; }

        public double? TotalTax { get; set; }

        public double? TotalIncl { get; set; }

        public int DCLink { get; set; }
    }
}
