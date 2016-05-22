var request = require('request');
module.exports = function(text) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        method: 'GET',
        json: {
            q : text,
            access_token: 'BRWV5Z7ZQSEQZ4CTDSJ2HSFN5X6UCYSA'
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }else {
        	console.log(body)
        }
        return body;
    })
}
