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
	var data = req.body.entry[0].messaging[0];
	console.log(data);
	

	res.end();
});

module.exports = router;
