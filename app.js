var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
const Wit = require('node-wit').Wit
var sendText = require('./routes/sendText')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use('/news', require('./routes/content'));
app.use('/summary', require('./routes/summarizer'));
app.use('/webhook', require('./routes/webhook'))
// index
app.get('/', function (req, res) {
    res.send('hello world i am a secret bot')
})

// spin spin sugar
app.listen((process.env.PORT || 3000), function() {
    console.log('running on port', (process.env.PORT || 3000))
})
