const nodemailer = require('nodemailer');
const config = require('../../config')

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: config.MAIL_ADDRESS,
        pass: config.MAIL_PASSWORD,
    },
    secure: true,
});

module.exports = {
    transporter
}