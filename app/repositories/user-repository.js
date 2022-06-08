const UserModel = require('../models/user');

async function getUserById(req, res) {
    return UserModel.findOne({id: req.params.id});
}

async function getUsersByIdList(idList) {
    return UserModel.find({id: {$in: idList}});
}

module.exports = {
    getUserById,
    getUsersByIdList
};