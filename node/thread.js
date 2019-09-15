let cp = require('child_process');
let child0 = cp.fork('child1000.js');
let child1 = cp.fork('child10000.js');
let child2 = cp.fork('child100000.js');

//线程之间通信，child2 线程会占用很多cpu
child0.on('message', function (msg) {
    console.log('got a message is', msg);
});
child0.send('hello world');

child1.on('message', function (msg) {
    console.log('got a message is', msg);
});
child1.send('hello world');

child2.on('message', function (msg) {
    console.log('got a message is', msg);
});
child2.send('hello world');