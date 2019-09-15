var http = require('http');
http.Server((req, res) => {
    res.writeHead(200);
    process.send(7000)
    res.end('hello world 7000\n');
}).listen(7000);