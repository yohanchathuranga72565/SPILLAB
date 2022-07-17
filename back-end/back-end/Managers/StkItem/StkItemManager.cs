using back_end.Context;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace back_end.Managers
{
    public class StkItemManager : IStkItemManager
    {
        private TaskDbContext _taskDbContext;

        public StkItemManager(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }

        public StkItem AddStkItem(StkItem stkItem)
        {
            throw new NotImplementedException();
        }

        public void DeleteStkItem(StkItem stkItem)
        {
            throw new NotImplementedException();
        }

        public StkItem EditStkItem(StkItem stkItem)
        {
            throw new NotImplementedException();
        }

        public StkItem GetStkItem(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<StkItem> GetStkItems()
        {
            return _taskDbContext.StkItems.ToList();
        }
    }
}
