/**
 * Created by zhouli on 2019/6/6
 */
Function.prototype.mybind = function (context,...arg1) {
    var that = this;
    //1.首先是返回一个函数
    //3.还可以接受参数
    let arg = arg1;

    return function () {
        //2.绑定context
        that.apply(context, arg)
    }
};


var b = {
    val: "val"
};

function testa(num,d) {
    console.log(this.val + num+d)
}

var bindA = testa.mybind(b,12,2);
// testa.mybind(b,2,2)
bindA('1',2);