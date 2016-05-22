var request = require('request');
module.exports = function(text) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        method: 'GET',
        json: {
            q : text,
            access_token: 'S3X5IJC2Q5VC45Q6XFK326COB5673RLN'
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }else {
        	console.log(body)
        }
    })
}
