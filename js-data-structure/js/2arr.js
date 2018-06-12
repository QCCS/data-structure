/**
 * Created by zhouli on 18/5/24
 */
//数组的一些方法
var arr = [1,23,2];

// 删除并返回数组的第一个元素
arr.shift();
// 删除并返回数组的最后一个元素
arr.pop();

//向数组的末尾添加一个或更多元素，并返回新的长度。
arr.push();
// 向数组的开头添加一个或更多元素，并返回新的长度。
arr.unshift();

//从某个已有的数组返回选定的元素
arr.slice(start,end);

// 连接两个或更多的数组，并返回结果
arr.concat();



// 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔
arr.join();

// 方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1。
arr.indexOf();

// 对数组的元素进行排序
arr.sort();


//---------------------------------------------------------
// 为每个元素执行对应的方法。
arr.forEach();
arr.forEach(function(item,index){
    console.log("item:"+item+",index:"+index);
});
//---------------------------------------------------------
// 方法用于检测数组中的元素是否满足指定条件（函数提供）。
arr.some();
arr.some(function checkAdult(item) {
    return item >= 1;
});
//---------------------------------------------------------
arr.every();
arr.every(function checkAdult(item) {
    return item >= 1;
});

//---------------------------------------------------------
// 方法创建一个新的匹配过滤条件的数组。
arr.filter();
var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
var newArr = arr.filter(function(item){
    return item.name=='orange';
})
console.log("Filter results:",newArr.toString());
//---------------------------------------------------------

//---------------------------------------------------------
// 对数组的每个元素进行一定操作（映射）后，会返回一个新的数组，。
arr.map();
var oldArr =
    [{first_name:"Colin",last_name:"Toh"},
        {first_name:"Addy",last_name:"Osmani"},
        {first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(){
    return oldArr.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        return item;
    });
}
console.log(getNewArr());
//---------------------------------------------------------

//---------------------------------------------------------
// 可以实现一个累加器的功能，将数组的每个值（从左到右）将其降低到一个值。。
arr.reduce();
function getWordCnt(){
    return arr.reduce(function(prev,next){
        console.log("prev:"+JSON.stringify(prev)+",next:"+next)
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}
console.log(JSON.stringify(getWordCnt()));
//---------------------------------------------------------
// 可以实现一个累加器的功能，将数组的每个值（从左到右）将其降低到一个值。。
arr.reduceRight();
//---------------------------------------------------------