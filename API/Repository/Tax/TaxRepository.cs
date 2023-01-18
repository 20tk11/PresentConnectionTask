using API.Models.Entities;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using API.Repository.Countries;

namespace API.Repository.Tax
{
    public class TaxRepository
    {
        
        public double GetPVM(string country)
        {
            /// Logic to get PVM by country

            double getPVM = 21;
            return getPVM;
        }
        public Result FindPVM(bool supplierPVM, bool clientPVM, string clientCountry, string supplierCountry, double PVM, double servicePrice, string regionClient)
        {
            Result result;
            if (supplierPVM)
            {
                if (clientCountry == supplierCountry)
                {
                    result = new Result("Visada taikomas PVM", CalculatePVM(PVM, servicePrice));
                }
                else
                {
                    if (regionClient != "Europe")
                    {
                        result = new Result("PVM taikomas 0%", 0);
                    }
                    else
                    {
                        if (!clientPVM)
                        {
                            result = new Result("Taikomas PVM x%, kur x - toje šalyje taikomas PVM procentas", CalculatePVM(PVM, servicePrice));
                        }
                        else
                        {
                            result = new Result("Taikomas 0% pagal atvirkštinį apmokestinimą", 0);
                        }
                    }
                }
            }
            else
            {
                result = new Result("PVM mokestis nuo užsakymo sumos nėra skaičiuojamas.", 0);
            }
            return result;
        }

        public double CalculatePVM(double PVM, double servicePrice)
        {
            return PVM / 100 * servicePrice;
        }
    }
}
