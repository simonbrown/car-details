using System;
using Xunit;
using car_details.Controllers;
using Microsoft.AspNetCore.Mvc;
using NuGet.Frameworks;
using System.Text.Json;

namespace car_details_test
{
    public class CarControllerTest
    {
        [Fact]
        public void JsonResponseTest()
        {
            CarController carController = new CarController();
            ActionResult<string> result = carController.Get("YC08JWU");

            JsonDocument document = JsonDocument.Parse(result.Value);
            
            Assert.NotEqual(0, document.RootElement.GetArrayLength());
        }
    }
}
