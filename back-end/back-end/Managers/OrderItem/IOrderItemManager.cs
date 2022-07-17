using back_end.Models;
using System;
using System.Collections.Generic;

namespace back_end.Managers
{
    public interface IOrderItemManager
    {
        public OrderItem AddOrderItem(OrderItem orderItem);


        public void DeleteOrderItem(OrderItem orderItem);


        public OrderItem EditOrderItem(OrderItem orderItem);



        public OrderItem GetOrderItem(string id);

        public List<OrderItem> GetOrderItems(int invoiceNo);

        public List<OrderItem> GetOrderItems();
    }
}
