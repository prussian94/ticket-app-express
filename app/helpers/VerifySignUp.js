const UserModel = require("../models/user");
const mongoose = require('mongoose');
const AuthService = require("../services/auth-service")

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    UserModel.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
        // Email
        UserModel.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            } else {
                 AuthService.register(req)
                res.status(200).send({ user: "Success!" });
                return;
            }

        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail
};
module.exports = verifySignUp;