using back_end.Context;
using back_end.Models;
using System;
using System.Collections.Generic;

namespace back_end.Managers
{ 
public interface IStkItemManager
    {
        public StkItem AddStkItem(StkItem stkItem);


        public void DeleteStkItem(StkItem stkItem);


        public StkItem EditStkItem(StkItem stkItem);



        public StkItem GetStkItem(Guid id);

        public List<StkItem> GetStkItems();
    }
}
