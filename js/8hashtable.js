//简单的hashtable
function SimpleHashTable() {
    this.table = new Array(137);
    this.simpleHash = function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    };
    this.showDistro = function showDistro() {
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    this.put = function put(data) {
        var pos = this.simpleHash(data);
        this.table[pos] = data;
    };
}





//更好的hashtable
//处理键的碰撞
function BetterHashTable() {
    this.table = new Array(137);
    this.betterHash = function betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    this.showDistro = function showDistro() {
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    this.put = function put(data) {
        var pos = this.betterHash(data);
        this.table[pos] = data;
    }
}

function HashTableWithGet() {
    this.table = new Array(137);
    this.betterHash = function betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    this.showDistro = function showDistro() {
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    this.put =   function put(key, data) {
        var pos = this.betterHash(key);
        this.table[pos] = data;
    }
    this.get = function get(key) {
        console.log(this.table[this.betterHash(key)]);
        return this.table[this.betterHash(key)];
    }
}
