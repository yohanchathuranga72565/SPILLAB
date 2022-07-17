using back_end.Context;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace back_end.Managers
{
    public class OrderItemManager : IOrderItemManager
    {
        private TaskDbContext _taskDbContext;

        public OrderItemManager(TaskDbContext taskDbContext) { 
            _taskDbContext = taskDbContext;
        }

        public OrderItem AddOrderItem(OrderItem orderItem)
        {
            orderItem.OrderNo = Convert.ToString(Guid.NewGuid());
            _taskDbContext.OrderItems.Add(orderItem);
            _taskDbContext.SaveChanges();

            return orderItem;
        }

        public void DeleteOrderItem(OrderItem orderItem)
        {
            throw new NotImplementedException();
        }

        public OrderItem EditOrderItem(OrderItem orderItem)
        {
            var exitingOrderItem = _taskDbContext.OrderItems.Find(orderItem.OrderNo);
            if (exitingOrderItem != null)
            {
                _taskDbContext.OrderItems.Update(orderItem);
                _taskDbContext.SaveChanges();
            }

            return orderItem;
        }

        public OrderItem GetOrderItem(string id)
        {
            throw new NotImplementedException();
        }

        public List<OrderItem> GetOrderItems(int invoiceNo)
        {
            throw new NotImplementedException();
        }

        public List<OrderItem> GetOrderItems()
        {
            return _taskDbContext.OrderItems.ToList();
        }
    }
}
