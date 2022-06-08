const TicketRepository = require('../repositories/ticket-repository');
const EventRepository = require('../repositories/event-repository');
const Exception = require('../exceptions/exceptions')

async function createTicket(req, res) {
    await EventRepository.removeSeatFromEvent(req.body.eventId, req.body.seat)
    return await TicketRepository.createTicket(req, res);
}

async function cancelTicket(req) {
    const ticket = await TicketRepository.getTicketById(req.params.id)
    if(ticket.deleted){
        return Exception.ticketAlreadyDeletedException

    } else {
        await TicketRepository.cancelTicket(req);
        await EventRepository.returnSeatToEvent(ticket.eventId, ticket.seat)
        return {"message": "Cancelled!"}
    }
}

async function getTicketsByOwnerId(req, res) {
    return await TicketRepository.getTicketsByOwnerId(req, res);
}

async function getTicketsByEventId(req, res) {
    return await TicketRepository.getTicketByEventId(req.params.id);
}

module.exports = {
    createTicket,
    cancelTicket,
    getTicketsByOwnerId,
    getTicketsByEventId
}