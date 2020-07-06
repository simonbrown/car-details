using System;
using Xunit;
using car_details.Controllers;
using Microsoft.AspNetCore.Mvc;
using NuGet.Frameworks;


namespace car_details_test
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            CarController carController = new CarController();
            ActionResult<string> result = carController.Get("YC08JWU");

            Object[] data = JsonConvert.DeserializeObject<Object[]>(result.Value);

            Console.WriteLine(data[0]);

            //Xunit.Assert.Equal(data[0]["registration"], "YC08JWU");
        }
    }
}
