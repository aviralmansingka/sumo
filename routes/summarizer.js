var express = require('express');
var router = express.Router();
var content = require('./content');
var request = require('request');

/* GET summary */
router.get('/', function(req, res) {
    content.getNYTHeadlines().then(function(headlines) {
        var url = headlines[0].url;
        content.getNYTRaw(url).then(function(rawText) {
            res.send(rawText);
        });
    });
});

module.exports = router;
