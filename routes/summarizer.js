var express = require('express');
var router = express.Router();
var request = require('request');

/* GET summary */
router.get('/', function(req, res) {
    request.get({
        url: "https://extraction.import.io/query/extractor/79091fbd-36c2-4ff4-84c5-77cdbdb14c23?_apikey=6a9cac1ddb454baab48095a36a2b24a5412212d7066bb865693a29c10868e7b13531d51e2e331184b515a7950ec0909debfc88d840f239051fe1af4e814eeee5df247cea84f09ee9acd1321a4ca7746f&url=" + encodeURIComponent(req.query.url)
    }, function(err, response) {
        if (err) {
            console.log("ERROR: " + err);
        } else {
            var jsonBody = JSON.parse(response.body);
            data = jsonBody.extractorData.data;
            var article = '';
            var i;
            for (i = 0; i < data.length; i++) {
                var j;
                for (j = 0; j < data[i].group.length; j++) {
                    var k;
                    for (k = 0; k < data[i].group[j].text.length; k++) {
                        article = article + " " + data[i].group[j].text[0].text;
                    }
                }
            }
            res.send(article);
        }
    });
});

module.exports = router;
