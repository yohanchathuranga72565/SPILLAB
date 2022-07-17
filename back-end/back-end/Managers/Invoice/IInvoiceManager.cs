using back_end.Models;
using System;
using System.Collections.Generic;

namespace back_end.Managers
{
    public interface IInvoiceManager
    {
        public Invoice AddInvoice(Invoice invoice);


        public void DeleteInvoice(Invoice invoice);


        public Invoice EditInvoice(Invoice invoice);



        public Invoice GetInvoice(Guid id);

        public List<Invoice> GetInvoices();
    }
}
