// 关键在于插入节点
// (1) 设根节点为当前节点。
// (2) 如果待插入节点保存的数据小于当前节点,则设新的当前节点为原节点的左节点; 反之,执行第 4 步。
// (3) 如果当前节点的左节点为 null,就将新的节点插入这个位置,退出循环;反之,继续执行下一次循环。
// (4) 设新的当前节点为原节点的右节点。
// (5) 如果当前节点的右节点为 null,就将新的节点插入这个位置,退出循环;反之,继续执行下一次循环。

// 二叉搜索树
function BST() {
    //二叉树 节点对象
    function Node(data, left, right) {
        //本节点的数据
        this.data = data;

        //与其他节点的链接关系
        this.left = left;
        this.right = right;

        //展示本节点数据
        this.show = function show() {
            return this.data;
        };
        //扩展功能：记录节点的次数，每次节点添加就会更新这个变量
        this.count = 0;
    }
    // 根节点
    this.root = null;
    //插入一次，节点的次数就更新一次
    this.update = function update(data) {
        var grade = this.find(data);
        grade.count++;
    }
    // 插入节点：关键方法
    this.insert = function insert(data) {
        var node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            // 下面的循环体重，需要两个节点，一个是父节点，一个当前节点，
            // 当前节点不是插入在父节点的左变就是右边

            // 一旦进入循环体，就把当前节点置为父节点
            var current = this.root;
            var parent;
            // while (true)
            for (;;){
                parent = current;
                // 判断插入数据小于还是大于父节点，放插入到左边还是右边
                if (data < parent.data) {
                    current = parent.left;
                    if (current == null) {
                        parent.left = node;
                        //一旦插入就退出
                        break;
                    }
                } else {
                    current = parent.right;
                    if (current == null) {
                        parent.right = node;
                        break;
                    }
                }
            }


        }
        this.update(data);

    };
    //中序遍历，输出节点
    //由于始终先输出左边节点，所以可形成排序，
    this.inOrder = function inOrder(node) {
        if (!(node == null)) {
            inOrder(node.left);
            console.log(node.show() + " ");
            inOrder(node.right);
        }
    };
    //先序：
    this.preOrder = function preOrder(node) {
        if (!(node == null)) {
            console.log(node.show() + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    };
    //后序
    this.postOrder = function postOrder(node) {
        if (!(node == null)) {
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.show() + " ");
        }
    };

    //获取最小节点
    this.getmin = function getmin() {
        var current = this.root;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    };
    //获取最大节点
    this.getmax = function getmax() {
        var current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    };

    //通过数据找到对应数据的节点
    this.find = function find(data) {
        var current = this.root;
        while (current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;
    };

    //删除节点,返回删除之后的二叉树
    this.remove = function remove(data) {
        return this.removeNode(this.root, data);
    };

    //删除节点，需要传入节点与节点上的数据,如果删除的节点有子节点，就比较麻烦
    //删除有子节点的节点麻烦的原因在于：删除节点的本质是调整其他节点的位置指向
    //返回删除后的节点
    this.removeNode = function removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // 如果没有子节点，删除简单
            if (node.left == null && node.right == null) {
                return null;
            }
            // 没有左节点，直接返回右节点
            if (node.left == null) {
                return node.right;
            }
            // 没有右节点，直接返回左节点
            if (node.right == null) {
                return node.left;
            }
            // 如果有两个节点
            // 需要调整树的左右节点
            // 就是把最小的节点找出来，然后作为新的根节点
            // 再把最小的根节点删除
            //返回新的节点
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    };
    this.getSmallest = function getSmallest(node) {
        if (node.left == null) {
            return node;
        } else {
            return this.getSmallest(node.left);
        }
    };


}


