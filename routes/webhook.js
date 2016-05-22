var express = require('express');
var router = express.Router();
var request = require('request');
var page_token = 'EAAQoyn1s0fMBAGjI17aXtHKPD4QGFfDk0wNstXCFNfHJkaDIQvdQHVJcZBZCfBOhcJjttZBYQVPeDyFZAHr8gDj3ria7iPncJb8wAMARhl0JWiynTXmtKRv5jw8qw54DXCmMuITUMPdmlhlyP8pqgLNLlaTBNubNzGzFn48ZAtAZDZD';


/* GET users listing. */
router.get('/', function(req, res) {
  if (req.query['hub.verify_token'] === page_token) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

router.post('/', function(req, res) {
	var sender_id = req.body.entry[0].messaging[0].sender.id;
	var text = req.body.entry[0].messaging[0].message.text;
	// Send the text to wit.ai for processing

	// if the intent == get_news

	// then call our library to scrape news articles and return them as an array

	// foreach element in the array
	//     get summary

	var request = require('request');

	request.post(
	    "https://graph.facebook.com/v2.6/me/messages?access_token="+page_token,
	    { form: 
	    	{ recipient: {
	    		id: sender_id
	    	}
	    	, message : {
	    		text : text
	    	}
	    } 
	},
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);
	

	res.end();
})

//kaggle.com

//sykidlearn
module.exports = router;
