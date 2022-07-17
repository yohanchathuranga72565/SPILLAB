using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context
{
    public class TaskDbContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }

        public DbSet<StkItem> StkItems { get; set; }

        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }

        public TaskDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}
