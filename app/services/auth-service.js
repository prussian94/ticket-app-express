const AuthRepository = require('../repositories/auth-repository');
const bcrypt = require("bcryptjs");

async function authenticate(req, res) {
    await AuthRepository.authenticate(req, res);
}

async function register(req) {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        roles: req.body.roles
    }
    await AuthRepository.register(user);

}

module.exports = {
    authenticate,
    register
}