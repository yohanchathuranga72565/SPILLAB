

using back_end.Context;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace back_end.Managers
{
    public class ClientManager : IClientManager
    {
        private TaskDbContext _taskDbContext;

        public ClientManager(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }
        public Client AddClient(Client client)
        {
            throw new NotImplementedException();
        }

        public void DeleteClient(Client client)
        {
            throw new NotImplementedException();
        }

        public Client EditClient(Client client)
        {
            throw new NotImplementedException();
        }

        public Client GetClient(int dcLink)
        {
            return _taskDbContext.Clients.Find(dcLink);
        }

        public List<Client> GetClients()
        {
            return _taskDbContext.Clients.ToList();
        }
    }
}
