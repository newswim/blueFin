Template.Home.helpers({
    allReports: function () {
      return DeviceReports.find({});
    }
})


// In the publish, return the last 10 or so reports
