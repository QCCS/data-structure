/**
 * Created by zhouli on 2019/8/16
 */
function extend_prototype(child, parent) {
    var F = new Function();
    F.prototype = parent.prototype;
    child.prototype = new F();//目的达到了
    child.prototype.constructor = child;

    child.superClass = parent.prototype;//自定义一个子类的静态属性,方便解耦
    //上面这句代码，保存父类的原型，这个非常有用，因为这样，我们利用sub.superClass.constructor
    //可以随时访问父类里面的私有属性
    if (parent.prototype.constructor === Object.prototype.constructor) {
        parent.prototype.constructor = parent;//还原构造器
    }//这个地方是为了防止在给对象原型时没有还原构造器而产生空对象出现错误
}

var a = {
    json:"ss",
    d:"d"
}
var b = {
    ddd:"dddddd"
}
extend_prototype(b,a)
console.log(a)
console.log(b)