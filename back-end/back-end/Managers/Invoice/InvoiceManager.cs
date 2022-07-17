using back_end.Context;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace back_end.Managers
{
    public class InvoiceManager : IInvoiceManager
    {
        private TaskDbContext _taskDbContext;

        public InvoiceManager(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }
        public Invoice AddInvoice(Invoice invoice)
        {
            _taskDbContext.Invoices.Add(invoice);
            _taskDbContext.SaveChanges();

            return invoice;
        }

        public void DeleteInvoice(Invoice invoice)
        {
            throw new NotImplementedException();
        }

        public Invoice EditInvoice(Invoice invoice)
        {
            var exitingInvoice = _taskDbContext.Invoices.Find(invoice.InvoiceNo);
            if (exitingInvoice != null)
            {
                _taskDbContext.Invoices.Update(invoice);
                _taskDbContext.SaveChanges();
            }

            return invoice;
        }

        public Invoice GetInvoice(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Invoice> GetInvoices()
        {
            return _taskDbContext.Invoices.ToList();
        }
    }
}
