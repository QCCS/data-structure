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
    {label: "发生日期从3", seqNo: "10",seqNo2:"12"},
    {label: "发生日期到3", seqNo: "10",seqNo2:"1"},
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
    {label: "发生日期从1", seqNo: "10"},
    {label: "发生日期到1", seqNo: "10"},
    {label: "发生日期从2", seqNo: "10"},
    {label: "发生日期到2", seqNo: "10"},

    {label: "发生日期从4", seqNo: "10"},
    {label: "发生日期到4", seqNo: "10"},
    {label: "发生日期从5", seqNo: "10"},
    {label: "发生日期到5", seqNo: "10"},

    {label: "发生日期到3", seqNo: "10",seqNo2:"1"},
    {label: "发生日期从3", seqNo: "10",seqNo2:"12"},

]


//如果 seqNo相同， 则以 seqNo2 排序

// 1.选出序号一样的连续的菜单 [{start:2,objList},{}]
















