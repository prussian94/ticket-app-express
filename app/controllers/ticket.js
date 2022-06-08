const express = require('express');
const router = express.Router();
const TicketService = require('../services/ticket-service');
const Exceptions = require('../exceptions/exceptions');

router.post('/', createTicket);
router.put('/cancel/:id', cancelTicket);
router.get('/byOwner/:id', getTicketsByOwnerId);
router.get('/byEvent/:id', getTicketsByEventId);

async function createTicket (req, res) {
    try {
        const ticket = await TicketService.createTicket(req, res)

        res.status(201).json({ticketInfo: ticket})

    } catch(err) {
        console.log(err)
        throw Exceptions.failedTicketCreate
    }
}

async function cancelTicket (req, res) {
    try {
        const info = await TicketService.cancelTicket(req, res)
        res.status(201).send({"message": info})

    } catch(err) {
        console.log(err)
        throw Exceptions.failedTicketCancel
    }
}

async function getTicketsByOwnerId (req, res) {
    const ticket = await TicketService.getTicketsByOwnerId(req, res)
    if(ticket)
        res.status(200).send(ticket)
    else
        res.status(404).send(Exceptions.ticketNotFoundException)
}

async function getTicketsByEventId (req, res) {
    const tickets = await TicketService.getTicketsByEventId(req, res)
    if(tickets)
        res.status(200).send(tickets)
    else
        res.status(404).send(Exceptions.ticketNotFoundException)
}

module.exports = router;
