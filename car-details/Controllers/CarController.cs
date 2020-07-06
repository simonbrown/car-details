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
        public ActionResult Get(string registration)
        {
            String requestUrlTemplate = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration={0}";
            String requestUrl = String.Format(requestUrlTemplate, registration);

            string mot_api_key = Environment.GetEnvironmentVariable("MOT_API_KEY");
            if (mot_api_key == null)
            {
                throw new ApplicationException("MOT_API_KEY not specified");
            }

            try
            {
                WebRequest request = WebRequest.Create(requestUrl);
                request.Headers.Add("x-api-key", mot_api_key);
                request.Headers.Add("Accept", "application/json+v6");

                using (WebResponse webResponse = request.GetResponse())
                {
                    StreamReader reader = new StreamReader(webResponse.GetResponseStream());
                    string responseStr = reader.ReadToEnd();
                    reader.Close();

                    return Content(responseStr, "application/json");
                }
            }
            catch (WebException exp)
            {
                using (HttpWebResponse response = (HttpWebResponse)exp.Response)
                {
                    // If we receive a 404 error it's probably because the license
                    // plate doesn't exist. Any other error indicates an issue with our
                    // application (e.g. invalid key) so we return a 500 error to the user.
                    if (response.StatusCode == HttpStatusCode.NotFound)
                    {
                        return NotFound();
                    } else
                    {
                        return StatusCode(500);
                    }
                }
            }
        }
    }
}
