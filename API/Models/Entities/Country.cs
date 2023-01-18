using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public class Country
    {
        public string country { get; set; }
        public string region { get; set; }
        public Country(string country, string region)
    {
        this.country = country;
        this.region = region;
    }
    }

}
