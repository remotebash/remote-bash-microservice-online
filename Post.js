var querystring = require('querystring');
var https = require('https');

module.exports= {
    sendPost: (codestring) => {
        
    // Build the post string from an object

    

    
    var post_data = querystring.stringify(codestring);
    
    // An object of options to indicate where to post to
    var post_options = {
        host: 'remotebash.herokuapp.',
        port: '8080',
        path: '/maquina',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };
    
    // Set up the request
    var post_req = https.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    
    // post the data
    post_req.write(post_data);
    post_req.end();
    
    }
};