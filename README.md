car-details
====================

React/ASP.NET Core webapp to look up details of a car based on its registration plate using the [government's MOT details API](https://dvsa.github.io/mot-history-api-documentation/).

The server side is a simple proxy of this API.

**Usage:**

Apply for an API key [here](https://www.smartsurvey.co.uk/s/MOT_History_TradeAPI_Access_and_Support?), set the MOT_API_KEY environment variable and then run the server using `dotnet start`

```export MOT_API_KEY=xxx
dotnet run```

**Features:**

- Look up car details based on registration plate
- See what percentage of the car's MOTs passed

**Testing:**

Run the server tests using `dotnet test` in the root directory.

Run the client tests using `npm test` in `car_details/ClientApp`.