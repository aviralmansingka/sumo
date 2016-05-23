var express = require('express');
var router = express.Router();

var token = 'EAAQoyn1s0fMBAKJZB9jJSLpfAEpuIIMPVwO3pwKwxcIjHrfvPYbJZB6ybu8FBx5aZCJcgiRp7srUsfxoaz58RuFAu8I3s1RcSwZCeaTHRdZBItg0AJZAyaxqZBZADqZAC6UZBSwMGWnhky5i3o54uMMlxPbQ5ZASKUhLYwffCpx1SrZAhAZDZD';
var func = function sendTextMessage(sender, text) {
    messageData = {
        text:text
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

module.exports = func;
