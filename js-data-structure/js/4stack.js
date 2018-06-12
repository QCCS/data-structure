/**
 * Created by zhouli on 18/5/25
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = function push(element) {
        this.dataStore[this.top++] = element;
    };
    this.pop = function pop() {
        return this.dataStore[--this.top];
    };
    this.peek = function peek() {
        return this.dataStore[this.top-1];
    };
    this.clear = function clear() {
        this.top = 0;
    };
    this.length = function length() {
        return this.top;
    };
}

module.exports = Stack;