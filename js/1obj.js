/**
 * Created by zhouli on 18/5/24
 */

//js定义对象的方式
var obj1 = {
    name: "json",
    length: 1,
    showName:function () {
        console.log(this.name);
    }
}

function Obj2(name,argLen) {
    this.name = name;
    this.argLen = argLen;
    this.showName = function () {
        console.log(this.name);
    }
}

var obj2 = new Obj2("function",2);