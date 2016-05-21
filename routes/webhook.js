var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  if (req.query['hub.verify_token'] === <YOUR_VERIFY_TOKEN>) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

module.exports = router;
