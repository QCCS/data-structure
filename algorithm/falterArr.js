/**
 * Created by zhouli on 2019/5/14
 */
//多维数组遍历
function superEach(arr) {
    var res = [];
    flater(arr);
    return res;
    function flater(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
                flater(arr[i])
            } else {
                res.push(arr[i])
            }
        }
    }
}
//原生 selfEach
Array.prototype.selfEach = function (fn) {
    for (var i = 0; i < this.length; i++) {
        fn(this[i], i)
    }
}
//遍历多维数组
Array.prototype.sEach = function (fn) {
    for (var i = 0; i < this.length; i++) {
        if (Object.prototype.toString.call(this[i]) === '[object Array]') {
            this[i].sEach(fn);
        } else {
            fn(this[i], i);
        }
    }
}
//实现map
Array.prototype.selfMap = function (fn) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr[i] = fn(this[i], i);
    }
    return newArr;
}

// 测试数据
var arr = [111, [22, 33], [333, "aa", [444]], 44, ['fa']];
var arr2 = [1, 2];

arr.sEach(function (item, index) {
    console.log(item);
    console.log(index);
});
var arr3 = arr2.selfMap(function (item, index) {
    return item * 2;
});
console.log(arr3)