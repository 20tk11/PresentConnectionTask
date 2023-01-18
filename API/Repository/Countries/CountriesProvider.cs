using API.Models.Entities;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace API.Repository.Countries
{
    public class CountriesProvider
    {
        public async Task<List<Country>> GetCountries(string url)
        {
            HttpClient client = new HttpClient();
            var httpResponseMessage = await client.GetAsync(url);
            string json = await httpResponseMessage.Content.ReadAsStringAsync();
            var result = JObject.Parse(json)["data"].ToString();
            Dictionary<string, Country> countryDictionary = JsonConvert.DeserializeObject<Dictionary<string, Country>>(result);
            List<Country> countries = new List<Country>();
            foreach (string key in countryDictionary.Keys)
            {
                countries.Add(new Country(countryDictionary[key].country, countryDictionary[key].region));
            }
            return countries;
        }
    }
}
