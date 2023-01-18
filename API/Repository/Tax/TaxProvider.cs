using API.Repository.Countries;
using API.Repository.Tax;
using API.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Repository.Tax
{
    public class TaxProvider
    {
        public async Task<Result> TaxGet(TaxData taxData)
        {
            var client = taxData.client;
            var supplier = taxData.supplier;
            var service = taxData.service;

            CountriesRepository countryProvider = new CountriesRepository();    
            string regionclient = await countryProvider.GetRegion(client.Country);
            if (regionclient == null)
            {
                return null;
            }
            TaxRepository taxRepository = new TaxRepository();
            double PVM = taxRepository.GetPVM(regionclient);

            return taxRepository.FindPVM(supplier.IsPVM, client.IsPVM, client.Country, supplier.Country, PVM, service.Price, regionclient);
        }
    }
}
