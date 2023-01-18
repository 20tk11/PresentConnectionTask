using API.Repository.Countries;
using API.Models.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using API.Repository;
using API.Repository.Countries;

namespace API.Repository.Countries
{
    public class CountriesRepository
    {
        /// <summary>
        /// Parsinti atskirai
        /// </summary>
        /// <returns></returns>
        /// 
        private readonly string url = "https://api.first.org/data/v1/countries?limit=1000";
        public async Task<List<Country>> GetCountries()
        {
            CountriesProvider countriesProvider = new CountriesProvider(); 
            return await countriesProvider.GetCountries(url);
        }
        public async Task<string> GetRegion( string country)
        {
            List<Country> countries = await GetCountries();
            return countries.Find(x => x.country == country).region;
        }
    }
}
