const mongoose = require('mongoose')

const shareSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
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

module.exports = mongoose.model('Share', shareSchema)