let cp = require('child_process');
var http = require('http');

let child0 = cp.fork('child7000.js');
let child1 = cp.fork('child7001.js');
let child2 = cp.fork('child7002.js');

// 用子线程 启动三个服务
child0.on('message', function (msg) {
    console.log('got a message is', msg);
});

child1.on('message', function (msg) {
    console.log('got a message is', msg);
});

child2.on('message', function (msg) {
    console.log('got a message is', msg);
});

http.Server((req, res) => {
    console.log(req.url);
    //有默认请求 /favicon.ico
    // console.log(res);
    res.writeHead(200);
    // child2.send("发给7002");
    console.log('fff');
    res.end('hello world 8000\n');
}).listen(8000);
