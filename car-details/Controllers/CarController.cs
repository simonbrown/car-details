using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace car_details.Controllers
{
    [ApiController]
    [Route("api/car/{registration}")]
    public class CarController : ControllerBase
    {
        [HttpGet]
        public string Get(string registration)
        {
            String requestUrlTemplate = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration={0}";
            String requestUrl = String.Format(requestUrlTemplate, registration);

            string mot_api_key = Environment.GetEnvironmentVariable("MOT_API_KEY");
            if (mot_api_key == null)
            {
                throw new ApplicationException("MOT_API_KEY not specified");
            }

            WebRequest request = WebRequest.Create(requestUrl);
            request.Headers.Add("x-api-key", mot_api_key);

            using (WebResponse webResponse = request.GetResponse())
            {
                StreamReader reader = new StreamReader(webResponse.GetResponseStream());
                string responseStr = reader.ReadToEnd();
                reader.Close();

                return responseStr;
            }
        }
    }
}
