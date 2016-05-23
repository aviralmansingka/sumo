var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
const Wit = require('node-wit').Wit
var wit = require('./routes/wit_engine')
var sendText = require('./routes/sendText')
var app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use('/news', require('./routes/content'));
app.use('/summary', require('./routes/summarizer'));

// index
app.get('/', function (req, res) {
    res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'aviral_is_god') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// to post data
app.post('/webhook', function (req, res) {
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



var token = 'EAAQoyn1s0fMBAKJZB9jJSLpfAEpuIIMPVwO3pwKwxcIjHrfvPYbJZB6ybu8FBx5aZCJcgiRp7srUsfxoaz58RuFAu8I3s1RcSwZCeaTHRdZBItg0AJZAyaxqZBZADqZAC6UZBSwMGWnhky5i3o54uMMlxPbQ5ZASKUhLYwffCpx1SrZAhAZDZD';
function sendTextMessage(sender, text) {
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

// spin spin sugar
app.listen((process.env.PORT || 3000), function() {
    console.log('running on port', (process.env.PORT || 3000))
})
