var express = require('express');
var router = express.Router();
var request = require('request');



/* GET users listing. */
router.get('/', function(req, res) {
  if (req.query['hub.verify_token'] === 'EAAQoyn1s0fMBAGjI17aXtHKPD4QGFfDk0wNstXCFNfHJkaDIQvdQHVJcZBZCfBOhcJjttZBYQVPeDyFZAHr8gDj3ria7iPncJb8wAMARhl0JWiynTXmtKRv5jw8qw54DXCmMuITUMPdmlhlyP8pqgLNLlaTBNubNzGzFn48ZAtAZDZD') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

router.post('/', function(req, res) {
	if(req.body) {
		console.log('There is some stuff in here ' + JSON.parse(req.body));
		res.send(req.body);
	}else{
		console.log('Something went wrong');
		res.send(req.body);
	}
	res.end();
})

module.exports = router;
