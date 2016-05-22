var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res) {
  if (req.query['hub.verify_token'] === 'aviral_is_god') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

router.post('/', function(req, res) {
	console.log('YOYOYO')
	//var data = req.body.entry[0].messaging[0];
	//console.log(data);
	var sender_id = req.body.entry[0].messaging[0].sender.id;
	var text = (req.body.entry[0].messaging[1].message.text);
	console.log(text);
	console.log(sender_id);
	var url = 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAQoyn1s0fMBAKJZB9jJSLpfAEpuIIMPVwO3pwKwxcIjHrfvPYbJZB6ybu8FBx5aZCJcgiRp7srUsfxoaz58RuFAu8I3s1RcSwZCeaTHRdZBItg0AJZAyaxqZBZADqZAC6UZBSwMGWnhky5i3o54uMMlxPbQ5ZASKUhLYwffCpx1SrZAhAZDZD';
	console.log(url);
	var request  = require('request');
	request({
		url: url,
		method: 'POST',
		json: {
			recipient : {id:sender_id},
			message : {text:text}
		}
	}, function(error, response, body) {
		if(error) {
			console.log('Error sending message ' + error);
		}
	});

	//res.end();
});

module.exports = router;
