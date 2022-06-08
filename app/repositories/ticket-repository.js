const TicketModel = require('../models/ticket');
const mongoose = require('mongoose');

async function createTicket(req, res) {
    const isReservation = req.query.reservation
    const ObjectId = mongoose.Types.ObjectId();
    const TicketObject = {
        _id: ObjectId,
        id: ObjectId.toString(),
        eventId: req.body.eventId,
        buyTime: Date.now(),
        ownerId: req.body.ownerId,
        price: req.body.price,
        seat: req.body.seat,
        ...((isReservation) && {isReservation: true}),
        recordTime: {
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    };

    return await TicketModel.create(TicketObject);
}

async function cancelTicket(req) {
    TicketModel.updateOne({id: req.params.id},
        {deleted: true}, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated Docs : ", docs);
            }
        });
}

async function getTicketsByOwnerId(req, res) {
    return TicketModel.find({ownerId: req.params.id});
}

async function getTicketById(id) {
    return TicketModel.findOne({id: id});
}

async function getTicketByEventId(eventId) {
    return TicketModel.findOne({eventId: eventId}).sort({seat: -1});
}

module.exports = {
    createTicket,
    cancelTicket,
    getTicketsByOwnerId,
    getTicketById,
    getTicketByEventId
};