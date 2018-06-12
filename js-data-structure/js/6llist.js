/**
 * Created by zhouli on 18/5/25
 * 链表
 */
//单向链表
function LList() {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    this.head = new Node("head");

    //寻找节点
    this.find = function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    //插入节点
    this.insert = function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    };
    //显示节点
    this.display = function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };
    //找到前一个节点
    this.findPrevious = function findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    //移除节点
    this.remove = function remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    };
}
// 双向链表
function LList2() {
    function Node(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
    this.head = new Node("head");
    this.find = function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.insert = function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    };
    this.display = function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };
    this.remove = function remove(item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    };
    this.findLast = function findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.dispReverse = function dispReverse() {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    };
}