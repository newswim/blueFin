DeviceReports = new Mongo.Collection('devicereports');

if (typeof Schema === 'undefined') Schema = {};
Schema.Sensor = new SimpleSchema({
  id: {
    type: String,
  },
  type: {
    type: String,
    allowedValues: ['temperature', 'dissolvedOxygen', 'conductivity', 'pH', 'waterLevel'],
  },
  units: {
    type: String,
    allowedValues: ['Celsius', 'oxygens', 'ohms', 'pH', 'waters'],
  },
  value: {
    type: Number,
  }
});

Schema.DeviceReports = new SimpleSchema({
  time: {  // Expert User who did the work.
    type: Number,
    min:0,
  },
  sensors: {
    type: [Schema.Sensor],
    min:1,
  },
});
DeviceReports.attachSchema(Schema.DeviceReports);

// Save Server time because devices will be out of sync
Schema.AutoTimestamps = new SimpleSchema({
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
});
DeviceReports.attachSchema(Schema.AutoTimestamps);
