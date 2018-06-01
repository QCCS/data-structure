function Queue() {
    // 私有变量 items，用于记录数组
    var items = [];
    // 入队
    this.enqueue = function (element) {
        items.push(element);
    };
    // 出队
    this.dequeue = function () {
        return items.shift();
    };
    // 查看队列的第一个元素
    this.front = function () {
        return items[0];
    };
    // 查看队列是否为空
    this.isEmpty = function () {
        return items.length == 0;
    };
    // 查看队列的长度
    this.size = function () {
        return items.length;
    };
    // 将数组转为字符串并返回
    this.toString = function () {
        return items.toString();
    };
}
function Dictionary() {
    var items = {};

    this.has = function (key) {
        return key in items;
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
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
function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    this.getAdjList = function () {
        return adjList.getItems();
    };

    var initializeColor = function () {
        var color = {};
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new Queue();

        queue.enqueue(v);
        color[v] = 'black';

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);

            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    queue.enqueue(w);
                    color[w] = 'black';
                }
            }

            if (callback) {
                callback(u);
            }
        }
    };

    this.BFS = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = {},
            pred = {};

        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[v] = 'black';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    queue.enqueue(w);
                    color[w] = 'black';

                    d[w] = d[u] + 1;
                    pred[w] = u;
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    };

    this.dfs = function (v, callback) {
        var color = initializeColor();
        dfsVisit(v, color, callback);
    };

    var dfsVisit = function (u, color, callback) {
        if (callback) {
            callback(u);
        }
        var neighbors = adjList.get(u);
        color[u] = 'black';
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }
    };

    var time = 0;
    this.DFS = function () {
        var color = initializeColor(),
            d = {},
            f = {},
            p = {};
        time = 0;

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            f[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    };

    var DFSVisit = function (u, color, d, f, p) {
        color[u] = 'black';
        d[u] = ++time;
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        f[u] = ++time;
    };

}

