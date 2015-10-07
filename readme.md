This is a big time work in progress. Still needs publish logic, some sort of throttling, collection index, d3.js . . .

Steps for using:

1. git clone
2. `meteor`
3. Download an HTTP client, chrome has a nice one called Advanced Rest Client Application
4. HTTP POST to `localhost/devicereport/:deviceId` [deviceId must be a number]
5. Here's an example:

```json
{
  "time": 123123123,
  "sensors": [
    {
      "id": "tank",
      "type": "temperature",
      "units": "Celsius",
      "value": 85
    }
  ]
}
```

You might get a response error 500 if the client has no Send method.
