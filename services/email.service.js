'use strict'

const nodemailer = require('nodemailer');
const url = 'http://localhost:4200/';

/**
 ** Service Creation
 */

function serviceAuth(){
      return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                  user: 'marcvimu2@gmail.com',
                  pass: 'Marc1996'
            }
      });
}

function sendEmail(toEmail, template){
      
      let email = {
            from: 'marcvimu2@gmail.com',
            to: toEmail,
            subject: template.subject,
            html: template.content
      }

      serviceAuth().sendMail(email, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
      }); 
}

/**
 ** Templates
 */

 const templateEmailConfirmation = {
      'subject': 'Confirm your account',
      'content': '<a href="' + url + 'auth/log-in?id=#token">Click here to confirm your email</a>'
}

const Templates = Object.freeze({
      'EmailConfirmation': templateEmailConfirmation
});

module.exports = {
      sendEmail,
      Templates
}