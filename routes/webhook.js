var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    if (req.query['hub.verify_token'] === 'aviral_is_god') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})
// to post data
router.post('/', function (req, res) {
    messaging_events = req.body.entry[0].messaging;
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i];
        sender = event.sender.id;
        if (event.message && event.message.text) {
            // safe to get text and send to wit.ai
            text = event.message.text;
            if (text === 'Generic') {
                sendGenericMessage(sender);
                continue;
            }
            sendTextMessage(sender, text.substring(0, 200));
        }
        if (event.postback) {
            text = JSON.stringify(event.postback);
            sendTextMessage(sender, "Postback received: " + text.substring(0, 200), token);
            continue;
        }
    }
    res.status(200).send();
})

var token = 'EAAQoyn1s0fMBAKJZB9jJSLpfAEpuIIMPVwO3pwKwxcIjHrfvPYbJZB6ybu8FBx5aZCJcgiRp7srUsfxoaz58RuFAu8I3s1RcSwZCeaTHRdZBItg0AJZAyaxqZBZADqZAC6UZBSwMGWnhky5i3o54uMMlxPbQ5ZASKUhLYwffCpx1SrZAhAZDZD';
function sendTextMessage(sender, text) {
    messageData = {
        text: text
    };
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: token},
        method: 'POST',
        json: {
            recipient: {id: sender},
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

function sendGenericMessage(sender) {
    messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "First card",
                    "subtitle": "Element #1 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.messenger.com",
                        "title": "web url"
                    }, {
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for first element in a generic bubble",
                    }],
                }, {
                    "title": "Second card",
                    "subtitle": "Element #2 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
                    "buttons": [{
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for second element in a generic bubble",
                    }],
                }]
            }
        }
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

module.exports = router;

