/**
 * Created by zhouli on 2019/5/14
 * 深拷贝
 */
const deepcopy = require('deepcopy');
//判断类型
function isType(arg) {
    let type = Object.prototype.toString.call(arg);
    type = (type.slice(8, type.length - 1)).toLowerCase();
    return type;
}

//深拷贝对象
function deepFullCopy(obj, parent) {
    let _parent = parent;
    while (_parent) {
        if (_parent.originParent === obj) {
            return _parent.currentParent;
        }
        _parent = _parent.parent
    }
    let typeArr = ['object', 'array'];
    //todo 还需要支持 map set symbol promise 等对象
    if (typeArr.indexOf(isType(obj)) < 0) {
        //其他类型直接返回 function boolean null undefined date regexp 等
        return obj;
    }
    return (function (obj, newObj, parent) {
        if (isType(obj) === 'array') {
            return deepCopyArr(obj, {
                originParent: obj,
                currentParent: newObj,
                parent: parent
            });
        }
        for (let key in obj) {
            if (isType(obj[key]) === 'array') {
                newObj[key] = deepCopyArr(obj[key], {
                    originParent: obj,
                    currentParent: newObj,
                    parent: parent
                });
            } else if (isType(obj[key]) === 'object') {
                newObj[key] = deepFullCopy(obj[key], {
                    originParent: obj,
                    currentParent: newObj,
                    parent: parent
                });
            } else {
                newObj[key] = obj[key]
            }
        }
        return newObj;
    })(obj, {}, parent)
}

//深拷贝多维数组
function deepCopyArr(arr, parent) {
    let _parent = parent;
    //该字段有父级则需要追溯该字段的父级
    while (_parent) {
        //如果该字段引用了它的父级，则为循环引用
        if (_parent.originParent === arr) {
            //循环引用返回同级的新对象
            return _parent.currentParent;
        }
        _parent = _parent.parent
    }
    let newObj = [];
    for (let i = 0; i < arr.length; i++) {
        if (isType(arr[i]) === 'array') {
            newObj[i] = deepCopyArr(arr[i], {
                originParent: arr,
                currentParent: newObj,
                parent: parent
            });
        }
        if (isType(arr[i]) === 'object') {
            newObj[i] = deepFullCopy(arr[i], {
                originParent: arr,
                currentParent: newObj,
                parent: parent
            });
        } else {
            newObj[i] = arr[i];
        }
    }
    return newObj;
}

//------

//测试数据
//原型方法不拷贝
Array.prototype.printSelf = function () {
    console.log(this)
};
let arrT = [12, 33, 22];

let objTest = {
    name: "name",
    obj: {
        name: "json",
        action: function () {
            return "action"
        },
        val: null
    },
    value: arrT,
    v: true,
    arr: {
        valueArr: [12, 33, [3333, 3444, 4444]]
    },
    isUndefined: undefined,
}
let testR = {
    "key": {
        "test": 'test'
    }
}
testR.d = testR;

let objTest2 = [12, 33, [3333, 3444, 4444]];
let newObj = deepFullCopy(objTest);
let newObj2 = deepFullCopy(objTest2);
console.log(newObj);
console.log(newObj2);
newObj.value.printSelf();
console.log(deepFullCopy(true));
console.log(deepFullCopy("ts"));
console.log(deepFullCopy(new Date()));
console.log(deepFullCopy(new RegExp(/a/)));
console.log(deepFullCopy(function a(name) {
}));
console.log(null);
console.log(undefined);
console.log(deepFullCopy(testR));

console.log(deepcopy(testR));



while (objTest2.length){
    console.log(objTest2[objTest2.length-1])
    objTest2.pop();
}