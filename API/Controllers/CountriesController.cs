using API.Repository.Countries;
using API.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using RestSharp;
using System.Net.Http.Headers;


namespace API.Controllers;
[ApiController]
[Route("api/countries")]
public class CountriesController : ControllerBase
{
    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> CountriesGet()
    {
        CountriesRepository countriesRepository = new CountriesRepository();
        return Ok(await countriesRepository.GetCountries());
    }


}
