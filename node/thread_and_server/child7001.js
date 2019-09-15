var http = require('http');
http.Server((req, res) => {
    res.writeHead(200);
    process.send(7001)
    res.end('hello world 7001\n');
}).listen(7001);