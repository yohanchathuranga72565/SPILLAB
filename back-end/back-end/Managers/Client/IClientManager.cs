using back_end.Models;
using System;
using System.Collections.Generic;

namespace back_end.Managers
{
    public interface IClientManager
    {

        public Client AddClient(Client client);


        public void DeleteClient(Client client);


        public Client EditClient(Client client);



        public Client GetClient(int dcLink);

        public List<Client> GetClients();

    }
}
