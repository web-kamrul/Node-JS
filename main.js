var http = require('http');
var URL = require ('url')
var ourServer = http.createServer(function(req, res) {
    var myURL = "https://www.lumengy.com/illuminating-your-path-crafting-custom-paver-lights-with-lumengy/"

    var myURLObj = URL.parse(myURL,true);

    var myHostName = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myHostName);
    res.end();
});

ourServer.listen(5052);
console.log('Hurrah! Our Server is working');
