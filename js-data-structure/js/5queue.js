/**
 * Created by zhouli on 18/5/25
 */
function Queue() {
    this.dataStore = [];
    //入队
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element);
    };
    //出队
    this.dequeue = function dequeue() {
        return this.dataStore.shift();
    };
    //取出第一个
    this.front = function front() {
        return this.dataStore[0];
    };
    //取出最后一个
    this.back = function back() {
        return this.dataStore[this.dataStore.length - 1];
    };
    this.toString = function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };
    //队列是否为空
    this.isEmpty = function empty() {
        return this.dataStore.length == 0;
    };
    // 查看队列的长度
    this.size = function () {
        return this.dataStore.length;
    };
}

