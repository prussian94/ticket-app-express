const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    availableCapacity: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    recordTime: {
        createdAt: {
            type: Number,
            required: true,
        },
        updatedAt: {
            type: Number,
            required: true,
        },
    }
})

module.exports = mongoose.model('Event', eventSchema)