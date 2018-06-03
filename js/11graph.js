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
//图
//本质上顶点与点的关系
function Graph() {
    //存储顶点
    var vertices = [];
    //每个顶点对应的其他顶点
    var adjList = new Dictionary();

    //添加顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    //添加顶点链接的其他顶点
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    //获取图的顶点与顶点的关系
    this.getAdjList = function () {
        return adjList.getItems();
    };

    //初始化顶点颜色
    var initializeColor = function () {
        var color = {};
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    //广度优先，遍历依靠队列，把遍历过的点点加入队列，挨个取出遍历点点相连的顶点
    //遍历依靠队列，把遍历过的点点加入队列，挨个取出遍历点点相连的顶点,,由于总数遍历挨着的点点，所有在一层顶点没有遍历
    //完的时候，用于不会遍历下一层，就形成了广度优先
    this.bfs = function (v, callback) {
        var color = initializeColor();
        var queue = new Queue();

        //入队，标记黑色
        queue.enqueue(v);
        color[v] = 'black';

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            //找到相连顶点
            var neighbors = adjList.get(u);

            //相邻顶点标记为黑色，代表遍历过
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    queue.enqueue(w);
                    color[w] = 'black';
                }
            }

            //遍历的点放进回调函数中
            if (callback) {
                callback(u);
            }
        }
    };

    //广度优先遍历：求出到各个顶点的距离
    this.BFS = function (v) {
        var color = initializeColor();
        var queue = new Queue();
        var d = {};
        var pred = {};

        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
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

    //深度优先遍历
    this.dfs = function (v, callback) {
        var color = initializeColor();
        dfsVisit(v, color, callback);
    };

    //深度优先遍历，采用递归，凡是相连节点，没有标记的就继续递归，形成深度遍历
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
        var color = initializeColor();
        var d = {};
        var f = {};
        var p = {};
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

