const UserModel = require('../models/user');
const mongoose = require('mongoose');
const config = require('../../config')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function authenticate(req, res) {
    UserModel.findOne({
        username: req.body.username
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                res.status(404).send({ message: "User Not found." });
                return;
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
                return;
            }
            var token = jwt.sign({ id: user.id }, config.JWT_SECRET_KEY, {
                expiresIn: 86400 // 1 day
            });
            res.status(200).cookie('token', token, {expire: 86400+Date.now()}, {userId: user._id}).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: user.roles,
                accessToken: token,
                responseText: "Login Successful."
            });
        });
}

async function register(user) {

    const ObjectId = mongoose.Types.ObjectId();
    const userObject = {
        _id: ObjectId,
        id: ObjectId.toString(),
        username: user.username,
        password: user.password,
        email: user.email,
        roles: user.roles,
        recordTime: {
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    };

    return await UserModel.create(userObject);
}

module.exports = {
    authenticate,
    register
};