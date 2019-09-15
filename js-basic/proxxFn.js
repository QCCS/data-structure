/**
 * Created by zhouli on 2019/8/17
 */
function test(a) {
    console.log(a)
}
function proxyFn(fn) {
    return function (arg) {
        console.log('执行函数 '+fn.name);
        fn(arg)
    }
}

var testP = proxyFn(test);
var print = proxyFn(console.log)
testP('c');
print("代理console")

