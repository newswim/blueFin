Template.AllTheData.helpers({
    allReports: function () {
      return DeviceReports.find({});
    },

    totalReports: function() {
        return DeviceReports.find().count();
    },

    prettifyDate: function(timestamp){
	  if(!timestamp){
	    return "";
	  }
	  return moment(timestamp).calendar();
	}
})
