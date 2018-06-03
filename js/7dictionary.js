//键值对形式，对数据的存储
function Dictionary() {
    this.datastore = new Array();
    this.add = function add(key, value) {
       this.datastore[key] = value;
   };
   this.find = function find(key) {
       return this.datastore[key];
   };
   this.remove = function remove(key) {
       delete this.datastore[key];
   };
   this.showAll = function showAll() {
       for (var key in this.datastore) {
           console.log(key + " -> " + this.datastore[key]);
       }
   };
   //字典中的元素个数
   this.count = function count() {
       var n = 0;
       for(var key in this.datastore) {
           ++n;
       }
       return n;
   };
   this.clear = function clear() {
       for (var key in this.datastore) {
           delete this.datastore[key];
       }
   };
}


// 另一种方式，存在对象里面
function OtherDictionary() {
    var items = {};

    this.set = function (key, value) {
        items[key] = value;
    };
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.has = function (key) {
        return key in items;
    };
    this.values = function () {
        var values = [];
        for (var key in items){
            if(this.has(key)){
                values.push(items[key]);
            }
        }
        return values;
    };

    this.getItems = function () {
        return items;
    };
}