Template.Home.helpers({
    allReports: function () {
      return DeviceReports.find({});
    },
    prettifyDate: function(timestamp){
	  if(!timestamp){
	    return "";
	  }
	  return moment(timestamp).calendar();
	},
})


// In the publish, return the last 10 or so reports
