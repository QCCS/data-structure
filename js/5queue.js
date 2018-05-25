/**
 * Created by zhouli on 18/5/25
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element);
    };
    this.dequeue = function dequeue() {
        return this.dataStore.shift();
    };
    this.front = function front() {
        return this.dataStore[0];
    };
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
    this.empty = function empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {return false;
        }
    };
}

