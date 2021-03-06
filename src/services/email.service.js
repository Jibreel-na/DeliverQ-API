const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
var ejs = require("ejs");
var Mailgen = require('mailgen');



const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env ' + JSON.stringify(config.email.smtp)));
}

const sendEmail = async (to, subject, html) => {
  const msg = { from: config.email.from, to, subject, html, sender: 'DeloverQ' };
  await transport.sendMail(msg);
};

const BookingCreateEmailByGen = async (to, username, subject, heading, text, link, Tag) => {

  var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'DeliverQ Portal LLC',
      link: config.WEBSITE
    }
  })

  var email = {
    body: {
      greeting: 'Dear',
      signature: 'Sincerely',
      title: heading,
      name: username,
      action: {
        instructions: text,
        button: {
          color: '#EE572B', // Optional action button color
          text: 'TRACK HERE',
          link: link
        }
      }
    }
  };
  var html = mailGenerator.generate(email);
  var text = mailGenerator.generatePlaintext(email);

  const msg = { from: config.email.from, to, subject, html, text, sender: 'DeloverQ' };
  await transport.sendMail(msg);
};

const sendResetPasswordEmail = async (to, token, url) => {
  const subject = 'Reset password';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `${url}/reset-password?token=${token}`;
  console.log(resetPasswordUrl)
  setTimeout(() => {
    filePath = require('path').resolve('src/utils/emailTemplates/forgot.ejs')
    ejs.renderFile(filePath, {
      link: resetPasswordUrl
    }, async function (err, data) {
      if (err) {
        console.log(err);
      } else {
        await sendEmail(to, subject, data);
      }
    });
  }, 1000);
};


const sendEmailverification = async (to, token, url) => {
  const subject = 'Email Verification';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `${url}/active?token=${token}`;
  console.log(resetPasswordUrl)
  setTimeout(() => {
    filePath = require('path').resolve('src/utils/emailTemplates/confirmation.ejs')
    ejs.renderFile(filePath, {
      link: resetPasswordUrl
    }, async function (err, data) {
      if (err) {
        console.log(err);
      } else {
        await sendEmail(to, subject, data);
      }
    });
  }, 1000);
};



module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendEmailverification,
  BookingCreateEmailByGen
};
