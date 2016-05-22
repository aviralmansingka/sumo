var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
var webhook = require('./routes/webhook')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
    res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', webhook);

// to post data
app.post('/webhook/', webhook);

// spin spin sugar
app.listen((process.env.PORT || 5000), function() {
    console.log('running on port', (process.env.PORT || 5000))
})
