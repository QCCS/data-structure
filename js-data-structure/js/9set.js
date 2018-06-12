//集合
//
// • 不包含任何成员的集合称为空集,全集则是包含一切可能成员的集合。
// • 如果两个集合的成员完全相同,则称两个集合相等。
// • 如果一个集合中所有的成员都属于另外一个集合,则前一集合称为后一集合的子集。
//
// • 并集 将两个集合中的成员进行合并,得到一个新集合。
// • 交集 两个集合中共同存在的成员组成一个新的集合。
// • 补集 属于一个集合而不属于另一个集合的成员组成的集合。
function Set() {
    this.dataStore = [];
    //添加
    this.add = function add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    };
    //删除
    this.remove = function remove(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    };
    //集合大小
    this.size = function size() {
        return this.dataStore.length;
    };

    //是否包含
    this.contains = function contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    };
    //并集
    this.union = function union(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    };
    //交集
    this.intersect = function intersect(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    };
    //是否是子集
    this.subset = function subset(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (var member in this.dataStore) {
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    };
    // 补集
    this.difference = function difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    };
    //显示
    this.show = function show() {
        return "[" + this.dataStore + "]";
    };
}
