/**
 * Created by zhouli on 18/5/24
 */
function List() {
    //列表的元素个数
    this.listSize = 0;
    //列表的当前位置，游标
    this.pos = 0;
    //初始化一个空数组来保存列表元素
    this.dataStore = [];
    //给列表添加元素
    this.append = function append(element) {
        this.dataStore[this.listSize++] = element;
    };
    //在列表中查找某一元素
    this.find = function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };

    //从列表中删除元素
    this.remove = function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };

    //显示列表中的元素
    this.toString = function toString() {
        return this.dataStore;
    };
    //列表中有多少个元素
    this.length = function length() {
        return this.listSize;
    };
    //向列表中插入一个元素
    this.insert = function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    //清空列表中所有的元素
    this.clear = function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };

    //判断给定值是否在列表中
    this.contains = function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    //遍历列表需要的几个方法
    //游标移到最开始
    this.front = function front() {
        this.pos = 0;
    };
    //游标到最后
    this.end = function end() {
        this.pos = this.listSize-1;
    };
    //前移游标
    this.prev = function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    };
    //后移游标
    this.next = function next() {
        if (this.pos < this.listSize-1) {
            ++this.pos;
        }
    };
    //当前游标位置
    this.currPos = function currPos() {
        return this.pos;
    };
    //游标跳到指定位置
    this.moveTo = function moveTo(position) {
        this.pos = position;
    };
    //返回当前游标元素
    this.getElement = function getElement() {
        return this.dataStore[this.pos];
    };
}