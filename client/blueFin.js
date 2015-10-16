/*

    | | | ***** Types of Sensor Data **** | | |

    'Temperature', 'Dissolved Oxygen', 'Electrical Conductivity', 'pH', 'Salinity', 'Total Dissolved Solids'

*/

Template.Home.helpers({
    // allReports: function () {
    //   return DeviceReports.find({});
    // },

    findByTemp: function() {
        return DeviceReports.find({'sensors.type' : 'Temperature'}).fetch().slice(-1).pop();
    },

    findByDO: function() {
        return DeviceReports.find({'sensors.type' : 'Dissolved Oxygen'}).fetch().slice(-1).pop();
    },

    findByEC: function() {
        return DeviceReports.find({'sensors.type' : 'Electrical Conductivity'}).fetch().slice(-1).pop();
    },

    findByPH: function() {
        return DeviceReports.find({'sensors.type' : 'pH'}).fetch().slice(-1).pop();
    },

    findBySa: function() {
        return DeviceReports.find({'sensors.type' : 'Salinity'}).fetch().slice(-1).pop();
    },

    findByTDS: function() {
        return DeviceReports.find({'sensors.type' : 'Total Dissolved Solids'}).fetch().slice(-1).pop();
    },

    prettifyDate: function(timestamp){
	  if(!timestamp){
	    return "";
	  }
	  return moment(timestamp).calendar();
	},
})


// In the publish, return the last 10 or so reports
