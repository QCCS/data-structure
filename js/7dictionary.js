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
