function Map() {
    //private-container
    var obj = {};//真实存放数据的容器
    this.put = function (key, value) {
        obj[key] = value;//把键值对绑定到对象上
    }
    this.size = function () {
        var count = 0;
        for (var attr in obj) {//检测容器大小
            count++;
        }
        return count;
    }
    //get方法
    this.get = function (key) {
        //dang obj[key] 为0的时候就出问题
        //obj[key]===0||obj[key]===false这里增加两个条件，避免obj的键值为0与false的时候拿不到数据
        if (obj[key] || obj[key] === 0 || obj[key] === false) {
            return obj[key];
        } else {
            return null;
        }
    }
    //remove方法
    this.remove = function (key) {
        if (obj[key] || obj[key] === 0 || obj[key] === false) {
            delete obj[key];
        } else {
            //没有什么，就不删除
        }
    }
    //遍历所有的元素,参数为函数
    //是一个回调函数的概念
    this.eachMap = function (fn) {
        for (var attr in obj) {
            fn(attr, obj[attr]);
        }
    }
}