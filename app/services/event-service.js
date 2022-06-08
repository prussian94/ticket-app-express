const EventRepository = require('../repositories/event-repository');
const TicketRepository = require('../repositories/ticket-repository');
const UserRepository = require('../repositories/user-repository');
const nodemailer = require('nodemailer');
const mailer = require('../helpers/mailer')
const config = require('../../config')

async function createEvent(req, res) {
    await EventRepository.createEvent(req, res);
}

async function cancelEvent(req, res) {
    await EventRepository.cancelEvent(req, res);
    const ticketsOfEvent = await TicketRepository.getTicketsByEventId(req.params.id)
    const userIdList = ticketsOfEvent.map(ticket => ticket.ownerId)
    const distinctedList = [...new Set(userIdList)];
    const userList = await UserRepository.getUsersByIdList(distinctedList)
    const mailList = userList.map(user => user.email)
    return await sendCancellationMailsToUsers(mailList)
}

async function editPrice(req) {
    return await EventRepository.editPrice(req);
}

async function listEvents(req, res) {
    return await EventRepository.listEvents(req, res);
}

async function sendCancellationMailsToUsers(mailList) {
    var mailOptions = {
        from: config.MAIL_ADDRESS,
        to: mailList.join(","),
        subject: 'Event Has Been Cancelled.',
        text: 'We have to inform you that your event has been cancelled.'
    }

    mailer.transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    createEvent,
    editPrice,
    listEvents,
    cancelEvent
}