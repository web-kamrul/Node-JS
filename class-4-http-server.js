var http = require('http');
var ourServer = http.createServer(function(req, res) {
    res.end('Hello World');
});

ourServer.listen(5050);
console.log('Hurrah! Our Server is working');