const EventRepository = require('../repositories/event-repository');

async function createEvent(req, res) {
    await EventRepository.createEvent(req, res);
}

async function editPrice(req) {
    return await EventRepository.editPrice(req);
}

async function listEvents(req, res) {
    return await EventRepository.listEvents(req, res);
}

module.exports = {
    createEvent,
    editPrice,
    listEvents
}