const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    availableSeats: {
        type: Array,
        required: true,
    },

})

module.exports = placeSchema