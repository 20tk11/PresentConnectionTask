using API.Repository.Countries;
using API.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using API.Repository.Tax;
using RestSharp;
using System.Net.Http.Headers;
using API.Repository.Tax;

namespace API.Controllers;

[ApiController]
[Route("api/tax")]
public class TaxController : ControllerBase
{
    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> TaxGet(TaxData taxData)
    {
        TaxProvider taxProvider = new TaxProvider(); 
        if(taxData.client.Country == "")
        {
            RequestError err = new RequestError("Client country was not specified", 400);
            return BadRequest(err);
        }
        else if (taxData.supplier.Country == "")
        {
            RequestError err = new RequestError("Supplier country was not specified", 400);
            return BadRequest(err);
        }
        else if (taxData.service.Price < 0)
        {
            RequestError err = new RequestError("Price cannot be negative", 400);
            return BadRequest(err);
        }
        Result result = await taxProvider.TaxGet(taxData);
        if(result == null)
        {
            RequestError err = new RequestError("Clients country doesn't exist", 400);
            return BadRequest(err);
        }
        
        // return BadRequest(err);
        return Ok(result);



    }
}
