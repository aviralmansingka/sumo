var request = require('request');
var post_request = require('./sendText');
module.exports = function(text) {
    request({
        url: 'https://api.wit.ai/message',
        qs: {access_token:'BRWV5Z7ZQSEQZ4CTDSJ2HSFN5X6UCYSA', q:text},
        method: 'GET'
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }else {
        	var body1 = JSON.parse(body);
        	if(body1.outcomes[0]) {
        		console.log(body1.outcomes[0].intent)
        	} else {
        		console.log('outcomes[0] does not exist')
        	}
        }
    })
}
