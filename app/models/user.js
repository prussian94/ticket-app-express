const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    roles: {
        type: Array,
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

module.exports = mongoose.model('User', userSchema)