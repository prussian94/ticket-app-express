const UserRepository = require('../repositories/user-repository');

async function getUserById(req, res) {
    return await UserRepository.getUserById(req, res);
}

async function getUsersByIdList(req, res) {
    return await UserRepository.getUsersByIdList(req.body.idList);
}

module.exports = {
    getUserById,
    getUsersByIdList
}