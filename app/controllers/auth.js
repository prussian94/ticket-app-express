const express = require('express');
const router = express.Router();
const AuthService = require('../services/auth-service');
const verifySignUp  = require("../helpers/VerifySignUp");
const Exceptions = require('../exceptions/exceptions');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

async function login (req, res) {
  try {
    await AuthService.authenticate(req, res)

  } catch(err) {
    console.log(err)
    throw Exceptions.failedLogin
  }
}

async function register (req, res) {
  try {
    verifySignUp.checkDuplicateUsernameOrEmail(req, res)

  } catch(err) {
    console.log(err)
    throw Exceptions.failedRegisteration
  }
}

function logout (req, res) {
  res.clearCookie()
  res.status(204).send({message: "Successful Logout."})


}

module.exports = router;
