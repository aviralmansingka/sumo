var express = require('express');
var router = express.Router();
var wit = require('./wit_engine')
var sendText = require('./sendText')
// for facebook verification
router.get('/', function (req, res) {
    if (req.query['hub.verify_token'] === 'aviral_is_god') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// to post data
router.post('/', function (req, res) {
    messaging_events = req.body.entry[0].messaging
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i]
        sender = event.sender.id
        if (event.message && event.message.text) {
            // safe to get text and
            text = event.message.text
            wit(text)
            sendText(sender, text)
            
        }
    }
    res.status(200).send();
})

module.exports = router;

