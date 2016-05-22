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
	// console.log('YOYOYO')
	var sender_id = req.body.entry[0].messaging[0].sender.id;
	var text = (req.body.entry[0].messaging[0].message.text);
	console.log(text);
	console.log(sender_id);
	var access_token = 'EAAQoyn1s0fMBAJ1fAK0gcEfX7KFUYBgfH2MysVd80NVXNoGVjhCMa8k4t6TEGhFDT68S1yksllZBDqY2yAPgpMMR7T8JM0DjwYrLPc5QWAKLxD7HFyticryfwC58GysoKZBwMl0T26BiZBZByRG9pHGSVZACPJR7ZCKWpndAL5bwZDZD';
	var url = 'https://graph.facebook.com/v2.6/me/messages?access_token=' + url;
	var request = require('request');
	request.post(
    	url,
    	{ 
    		form: { 
    			recipient: {
    				id : sender_id
    			},
    			message: {
    				text : text
    			}
    		} 
    	},
    	function (error, response, body) {
        	if (!error && response.statusCode == 200) {
            	console.log(body);
            	res.end();
        	}else {
        		console.error('Something went wrong');
        	}
    	}
	);
	//res.end();
});

module.exports = router;
