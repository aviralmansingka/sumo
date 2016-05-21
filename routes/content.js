var express = require('express');
var router = express.Router();
var request = require('request');

/* GET news content */
router.get('/', function(req, res) {
    request.get({
        url: "https://api.nytimes.com/svc/topstories/v2/home.json",
        qs: {
            'api-key': "a16f2c99690c47578971fe156a2798bb"
        },
    }, function(err, response, body) {
        body = JSON.parse(body);
        res.json(body);
    });
});

module.exports = router;
