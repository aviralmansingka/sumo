var express = require('express');
var router = express.Router();
var request = require('request');

var page_token = 'EAAQoyn1s0fMBAGjI17aXtHKPD4QGFfDk0wNstXCFNfHJkaDIQvdQHVJcZBZCfBOhcJjttZBYQVPeDyFZAHr8gDj3ria7iPncJb8wAMARhl0JWiynTXmtKRv5jw8qw54DXCmMuITUMPdmlhlyP8pqgLNLlaTBNubNzGzFn48ZAtAZDZD';

/* GET users listing. */
router.get('/', function(req, res) {
  if (req.query['hub.verify_token'] === 'EAAQoyn1s0fMBAGjI17aXtHKPD4QGFfDk0wNstXCFNfHJkaDIQvdQHVJcZBZCfBOhcJjttZBYQVPeDyFZAHr8gDj3ria7iPncJb8wAMARhl0JWiynTXmtKRv5jw8qw54DXCmMuITUMPdmlhlyP8pqgLNLlaTBNubNzGzFn48ZAtAZDZD') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

router.post('/', function(req, res) {
	var sender_id = req.body.entry[0].messaging[0].sender.id;
	var text = (req.body.entry[0].messaging[0].message.text);
	console.log(text);
	console.log(sender_id);
	var url = "https://graph.facebook.com/v2.6/me/messages?access_token="+page_token;
	console.log(page_token);
	
	
})

module.exports = router;
