const EventModel = require('../models/event');
const mongoose = require('mongoose');

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
        recordTime: {
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    };

    return await EventModel.create(eventObject);
}

async function editPrice(req) {
    EventModel.updateOne({id: req.params.id},
        {unitPrice:Number(req.params.price)}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
}

async function listEvents(req, res) {
    return EventModel.find();
}

module.exports = {
    createEvent,
    editPrice,
    listEvents
};