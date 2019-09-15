/*
* 以某一个属性排序数组
* */
var testArr = [
    {label: "发生日期从1", seqNo: "10"},
    {label: "发生日期到1", seqNo: "10"},
    {label: "账套1", seqNo: "1"},
    {label: "发生日期从2", seqNo: "10"},
    {label: "发生日期到2", seqNo: "10"},
    {label: "账套2", seqNo: "1"},
    {label: "发生日期从3", seqNo: "10"},
    {label: "发生日期到3", seqNo: "10"},
    {label: "账套3", seqNo: "1"},
    {label: "发生日期从4", seqNo: "10"},
    {label: "发生日期到4", seqNo: "10"},
    {label: "账套4", seqNo: "1"},
    {label: "发生日期从5", seqNo: "10"},
    {label: "发生日期到5", seqNo: "10"},
    {label: "账套5", seqNo: "1"},
]
// 期望结果
var testArr1 = [
    {label: "账套1", seqNo: ""},
    {label: "账套2", seqNo: "1"},
    {label: "账套3", seqNo: "1"},
    {label: "账套4", seqNo: "1"},
    {label: "账套5", seqNo: "1"},
    {label: "发生日期从", seqNo: "10"},
    {label: "发生日期到", seqNo: "10"},
    {label: "发生日期从", seqNo: "10"},
    {label: "发生日期到", seqNo: "10"},
    {label: "发生日期从", seqNo: "10"},
    {label: "发生日期到", seqNo: "10"},
    {label: "发生日期从", seqNo: "10"},
    {label: "发生日期到", seqNo: "10"},
    {label: "发生日期从", seqNo: "10"},
    {label: "发生日期到", seqNo: "10"},
]

//方式一
function compare(property) {
    return function (a, b) {
        let value1 = parseInt(a[property]);
        let value2 = parseInt(b[property]);
        if (value1 === value2) {
            return 1;
        }
        return value1 - value2;
    }
}

//不稳定排序
// testArr.sort(compare("seqNo"));
// console.log(testArr)
/*
* 结果不符合预期
* [
* { label: '账套2', seqNo: '1' },
* { label: '账套3', seqNo: '1' },
* { label: '账套4', seqNo: '1' },
* { label: '账套1', seqNo: '1' },
* { label: '账套5', seqNo: '1' },
* { label: '发生日期到', seqNo: '10' },
* { label: '发生日期从', seqNo: '10' },
* { label: '发生日期到', seqNo: '10' },
* { label: '发生日期从', seqNo: '10' },
* { label: '发生日期从', seqNo: '10' },
* { label: '发生日期到', seqNo: '10' },
* { label: '发生日期从', seqNo: '10' },
* { label: '发生日期到', seqNo: '10' },
* { label: '发生日期到', seqNo: '10' },
* { label: '发生日期从', seqNo: '10' }
* ]
* */


/*
* js 自带的排序方式
* 1.对不同数据大小，选择的排序算法不一样
* 大于10条使用 快速排序 是不稳定排序
* 小于10条 插入排序 稳定排序
* 2.稳定排序与不稳定排序
* 在需要处理的数据中如果有相同的数据，不稳定排序，可能会导致与你期望不一样的结果
* */
//方式二
//自己写一个插入排序
function sortByProperty(arr, property) {
    let res = [], len = arr.length, index = 0;
    for (let i = index; i < len; i++) {
        res[i] = _hasLess(arr, arr[index]);
    }

    function _hasLess(arr, item) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            if (parseFloat(arr[i][property]) < parseFloat(item[property])) {
                return arr.splice(i, 1)[0];
            }
        }
        return arr.splice(0, 1)[0];
    }

    return res;
}

// let res = sortByProperty(testArr, 'seqNo');
// console.log(res)

function sortByProperty2(arr, property) {
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (parseFloat(arr[j][property]) > parseFloat(arr[j + 1][property])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let res2 = sortByProperty2(testArr, 'seqNo');
console.log(res2)
/*
* 符合预期
* [
*   { label: '账套1', seqNo: '1' },
*   { label: '账套2', seqNo: '1' },
*   { label: '账套3', seqNo: '1' },
*   { label: '账套4', seqNo: '1' },
*   { label: '账套5', seqNo: '1' },
*   { label: '发生日期从', seqNo: '10' },
*   { label: '发生日期到', seqNo: '10' },
*   { label: '发生日期从', seqNo: '10' },
*   { label: '发生日期到', seqNo: '10' },
*   { label: '发生日期从', seqNo: '10' },
*   { label: '发生日期到', seqNo: '10' },
*   { label: '发生日期从', seqNo: '10' },
*   { label: '发生日期到', seqNo: '10' },
*   { label: '发生日期从', seqNo: '10' },
*   { label: '发生日期到', seqNo: '10' }
* ]
* */




