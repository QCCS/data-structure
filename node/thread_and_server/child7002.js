var http = require('http');
let i=0;
process.on('message',function(msg){
    i++;
    console.log(i)
    console.log('收到主线程的消息',msg)
})
http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world 7002\n');
    i++;
    console.log(i)
    process.send(7002)
}).listen(7002);