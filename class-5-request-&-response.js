var http = require('http');
var ourServer = http.createServer(function(req, res) {
    
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Home</h1>');
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is About</h1>');
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Contact</h1>');
        res.end();
    }
});

ourServer.listen(5051);
console.log('Hurrah! Our Server is working');