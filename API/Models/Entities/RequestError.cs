using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public class RequestError
    {
        public string Message { get; set; }
        public int StatusCode { get; set; }

        public RequestError(string Message, int StatusCode)
        {
            this.Message = Message;
            this.StatusCode = StatusCode;
        }
    }
}