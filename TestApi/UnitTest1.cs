using API.Repository.Tax;
using API.Repository.Countries;

using API.Models.Entities;
using NSubstitute;
using NUnit.Framework;
using Microsoft.AspNetCore.Mvc;
using API.Controllers;

namespace TestApi
{
    public class Tests
    {

        [Test]
        public void CalculatePVM()
        {
            var servicePrice = 1000;
            var PVM = 19.7;
            TaxRepository taxRepository = new TaxRepository();
            Assert.That(197, Is.EqualTo(taxRepository.CalculatePVM(servicePrice, PVM)));
        }
        [Test]
        public void GetPVM()
        {
            var country = "Algeria";
            TaxRepository taxRepository = new TaxRepository();

            Assert.That(21, Is.EqualTo(taxRepository.GetPVM(country)));
        }
        [Test]
        public void FindPVM_Supplier_PVM_Is_False()
        {
            var supplierPVM = false;
            var clientPVM = true;
            var clientCountry = "Lithuania";
            var supplierCountry = "Lithuania";
            var PVM = 21;
            var servicePrice = 100;
            var regionClient = "Europe";

            TaxRepository taxRepository = new TaxRepository();

            var result = taxRepository.FindPVM(supplierPVM, clientPVM, clientCountry, supplierCountry, PVM, servicePrice, regionClient);
            Assert.That(0, Is.EqualTo(result.PVM));
        }
        [Test]
        public void FindPVM_Supplier_PVM_Is_True_And_Country_Same_As_Client()
        {
            var supplierPVM = true;
            var clientPVM = true;
            var clientCountry = "Lithuania";
            var supplierCountry = "Lithuania";
            var PVM = 21;
            var servicePrice = 100;
            var regionClient = "Europe";

            TaxRepository taxRepository = new TaxRepository();

            var result = taxRepository.FindPVM(supplierPVM, clientPVM, clientCountry, supplierCountry, PVM, servicePrice, regionClient);
            Assert.That(21, Is.EqualTo(result.PVM));
        }
        [Test]
        public void FindPVM_Supplier_PVM_Is_True_And_Client_Not_In_Europe()
        {
            var supplierPVM = true;
            var clientPVM = true;
            var clientCountry = "United States";
            var supplierCountry = "Lithuania";
            var PVM = 21;
            var servicePrice = 100;
            var regionClient = "North America";

            TaxRepository taxRepository = new TaxRepository();

            var result = taxRepository.FindPVM(supplierPVM, clientPVM, clientCountry, supplierCountry, PVM, servicePrice, regionClient);
            Assert.That(0, Is.EqualTo(result.PVM));
        }
        [Test]
        public void FindPVM_Supplier_PVM_Is_True_And_Client_In_Europe_No_PVM()
        {
            var supplierPVM = true;
            var clientPVM = false;
            var clientCountry = "Ukraine";
            var supplierCountry = "Lithuania";
            var PVM = 21;
            var servicePrice = 100;
            var regionClient = "Europe";

            TaxRepository taxRepository = new TaxRepository();

            var result = taxRepository.FindPVM(supplierPVM, clientPVM, clientCountry, supplierCountry, PVM, servicePrice, regionClient);
            Assert.That(21, Is.EqualTo(result.PVM));
        }
        [Test]
        public void FindPVM_Supplier_PVM_Is_True_And_Client_In_Europe_With_PVM()
        {
            var supplierPVM = true;
            var clientPVM = true;
            var clientCountry = "Ukraine";
            var supplierCountry = "Lithuania";
            var PVM = 21;
            var servicePrice = 100;
            var regionClient = "Europe";

            TaxRepository taxRepository = new TaxRepository();

            var result = taxRepository.FindPVM(supplierPVM, clientPVM, clientCountry, supplierCountry, PVM, servicePrice, regionClient);
            Assert.That(0, Is.EqualTo(result.PVM));
        }
        [Test]
        public async Task GetRegion()
        {
            CountriesRepository countriesRepository = new CountriesRepository();
            string res = await countriesRepository.GetRegion("Lithuania");
            Assert.That("Europe", Is.EqualTo(res));
        }
        [Test]
        public async Task GetCountries()
        {
            CountriesRepository countriesRepository = new CountriesRepository();
            List<Country> res = await countriesRepository.GetCountries();
            Assert.That(249, Is.EqualTo(res.Count));
        }

    }
}