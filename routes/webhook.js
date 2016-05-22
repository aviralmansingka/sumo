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
	
	//res.end();
});

module.exports = router;
