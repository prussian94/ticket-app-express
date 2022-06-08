const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    eventId: {
        type: String,
        required: true,
    },
    buyTime: {
        type: Number,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seat: {
        type: String,
        required: true,
    },
    deleted: {
        type: Boolean,
        required: false,
    },
    isReservation: {
        type: Boolean,
        required: false,
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

module.exports = mongoose.model('Ticket', ticketSchema)