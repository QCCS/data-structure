/**
 * Created by zhouli on 2019/5/16
 */
define(function(require, exports) {
    console.log('bar 模块');
    // 对外提供 doSomething 方法
    exports.doSomething = function() {
        console.log('bar 模块doSomething');
    };
});