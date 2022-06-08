const UserRepository = require('../repositories/user-repository');

async function getUserById(req, res) {
    return await UserRepository.getUserById(req, res);
}

module.exports = {
    getUserById
}