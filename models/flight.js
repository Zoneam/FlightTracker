const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
}) 

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: 'American'
        },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
        },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        },
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        },
    destinations: [destinationSchema]
});

flightSchema.statics.getCreationData = function() {
    const airports = this.schema.path('airport').enumValues;
    const airlines = this.schema.path('airline').enumValues;
    const defaultDepartureDate = this.schema.path('departs').default()();
    const defaultDepartureDateString = defaultDepartureDate.toISOString().slice(0,16);

    return {
      airports,
      airlines,
      defaultDepartureDateString,
    };
  };

module.exports = mongoose.model('Flight', flightSchema);