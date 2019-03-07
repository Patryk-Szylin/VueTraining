using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frontend_Training.Models
{
    public class Customer
    {
        public string name { get; set; }
        public int entryFee { get; set; }

        public Customer(string name, int entryFee)
        {
            this.name = name;
            this.entryFee = entryFee;
        }

    }
}
