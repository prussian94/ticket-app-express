const EventModel = require('../models/event');
const mongoose = require('mongoose');
const Exceptions = require('../exceptions/exceptions')

async function createEvent(req, res) {
    const ObjectId = mongoose.Types.ObjectId();
    const eventObject = {
        _id: ObjectId,
        id: ObjectId.toString(),
        eventName: req.body.eventName,
        date: req.body.date,
        place: req.body.place,
        capacity: req.body.capacity,
        availableCapacity: req.body.availableCapacity,
        unitPrice: req.body.unitPrice,
        photoUrl: req.body.photoUrl,
        recordTime: {
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    };

    return await EventModel.create(eventObject);
}

async function editPrice(req) {
    EventModel.updateOne({id: req.params.id},
        {unitPrice: Number(req.params.price)}, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated Docs : ", docs);
            }
        });
}

async function listEvents(req, res) {
    const filters = listEventFilters(req)
    return EventModel.find(filters).sort({"recordTime.createdAt": -1});
}

const listEventFilters = (req) => {
    const fromDateCondition = Boolean(req.query.from)
    const toDateCondition = Boolean(req.query.to)
    const placeCondition = Boolean(req.query.place)
    const nameCondition = Boolean(req.query.name)

    return {
        ...((fromDateCondition && toDateCondition) && {
            date: {
                "$gte": Number(req.query.from),
                "$lte": Number(req.query.to)
            }
        }),
        ...((placeCondition) && {place: {"$regex": req.query.place}}),
        ...((nameCondition) && {eventName: {"$regex": req.query.name}})
    }
}

async function removeSeatFromEvent(eventId, seat) {
    try{
        EventModel.updateOne({id: eventId},
            {$pull: {"place.availableSeats": {$in: [seat]}}}).exec();
    } catch{
        throw Exceptions.seatNoLongerAvailableException
    }
}

async function returnSeatToEvent(eventId, seat) {
    try{
        return EventModel.updateOne({id: eventId},
            {$push: {"place.availableSeats": seat}});
    } catch{
        throw Exceptions.seatNoLongerAvailableException
    }
}

module.exports = {
    createEvent,
    editPrice,
    listEvents,
    removeSeatFromEvent,
    returnSeatToEvent
};