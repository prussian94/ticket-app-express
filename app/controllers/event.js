const express = require('express');
const router = express.Router();
const EventService = require('../services/event-service');
const Exceptions = require('../exceptions/exceptions');

router.post('/', createEvent);
router.put('/:id/price/:price', editPrice);
router.get('/list', listEvents);

async function createEvent (req, res) {
  try {
    await EventService.createEvent(req, res)

    res.status(201).send({"message": "Created!"})

  } catch(err) {
    console.log(err)
    throw Exceptions.failedEventCreate
  }
}

async function editPrice (req, res) {
  try {
    await EventService.editPrice(req, res)
    res.status(201).send({"message": "Updated!"})

  } catch(err) {
    console.log(err)
    throw Exceptions.failedPriceUpdate
  }
}

async function listEvents (req, res) {
  try {
    const events = await EventService.listEvents(req, res)

    res.status(200).send(events)
  } catch(err) {
    console.log(err)
    throw Exceptions.failedEventList
  }
}

module.exports = router;
