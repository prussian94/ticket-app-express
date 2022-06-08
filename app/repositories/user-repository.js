const UserModel = require('../models/user');

async function getUserById(req, res) {
    return UserModel.findOne({id: req.params.id});
}

module.exports = {
    getUserById
};