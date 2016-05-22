var $ = require('jquery');
module.exports = function(text) {
    $.ajax({
	  url: 'https://api.wit.ai/message',
	  data: {
	    'q': 'set an alarm in 10min',
	    'access_token' : 'MY_WIT_TOKEN'
	  },
	  dataType: 'jsonp',
	  method: 'GET',
	  success: function(response) {
	      console.log("success!", response);
	  }
	});
}
