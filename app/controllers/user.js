const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');
const Exceptions = require('../exceptions/exceptions');

router.get('/:id', getUserById);

async function getUserById (req, res) {
    const user = await UserService.getUserById(req, res)
    if(user)
       res.status(200).send(user)
    else
       res.status(404).send(Exceptions.userNotFoundException)
}

module.exports = router;
