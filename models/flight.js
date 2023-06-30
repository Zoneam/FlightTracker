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
        enum: [ 'American', 'Southwest', 'United']
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
        default: () => {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        },
    destinations: [destinationSchema]
});

flightSchema.statics.getCreationData = function() {
    const airports = this.schema.path('airport').enumValues;
    const airlines = this.schema.path('airline').enumValues;
    const defaultDepartureDate = this.schema.path('departs').default();
  
    return {
      airports,
      airlines,
      defaultDepartureDate,
    };
  };

module.exports = mongoose.model('Flight', flightSchema);