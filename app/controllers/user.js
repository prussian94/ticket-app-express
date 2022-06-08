const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');
const Exceptions = require('../exceptions/exceptions');

router.get('/:id', getUserById);
router.get('/list', getUserByIdList);

async function getUserById (req, res) {
    const user = await UserService.getUserById(req, res)
    if(user)
       res.status(200).send(user)
    else
       res.status(404).send(Exceptions.userNotFoundException)
}

async function getUserByIdList (req, res) {
    const users = await UserService.getUsersByIdList(req, res)
    if(users)
        res.status(200).send(users)
    else
        res.status(404).send(Exceptions.userNotFoundException)
}

module.exports = router;
