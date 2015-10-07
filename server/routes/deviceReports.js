Router.route('deviceReport', {
  path: '/devicereport/:deviceId',
  where: 'server',
  action: function() {
    var res = this.response;
    var req = this.request;
    var body = req.body;

    // Load Button from collection
    var deviceId = this.params.deviceId;

    check(body, {
      time: Number,
      sensors: Array,
    }); // FIXME better check for parameters  http://docs.meteor.com/#/full/check
    // This check is really a performance thing.  SimpleSchema will reject bad data.

    var newId = DeviceReports.insert(body);

    // Send image.
    res.send(200, {
      time: new Date(),  // Stay in time sync
      relay1: true,      // turn relay1 on
      relay2: false,     // turn relay1 off
      led1: true,        // turn leds on/off
      led2: false,
    });
  }
});


// Router.route('deviceReport', function () {
//     path: '/devicereport/:deviceId',
//     where: 'server'
//
//     action: function() {
//         var res = this.response;
//         var req = this.request;
//         var body = req.body;
//
//         // get the deviceId from collection
//         deviceId = this.params.deviceId;
//
//         check(body, {
//             time: Number,
//             sensors: Array,
//         }); // FIXME: better check for parameters
//
//         DeviceReports.insert(body);
//
//         res.send(201);
//
//
//
//
//     }
//
//
//
// });
//
//
