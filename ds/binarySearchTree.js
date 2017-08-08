//todo avl rbt;

function BinarySearchTree() {

    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    function insertNode(node, newNode) {
        //由于二叉搜索树的性质，所以当键值小于当前所在节点的键值
        //则使得左子结点成为新的要比较的节点，进行递归调用
        //如果左子结点为null，则将键值赋值给左子结点。
        //如果键值大于当前所在节点的键值，原理同上。

        //如果小于父节点 往左
        if (newNode.key < node.key) {
            //如果左边没有
            if (node.left === null) {
                node.left = newNode;
            }
            //如果左边有，以左边为父节点递归 插入;
            else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }

    }

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };

    function inOrderTraverseNode(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    function preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };

    function postOrderTraverseNode(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    this.min = function () {
        return minNode(root)
    };

    function minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key
        }
        return null;
    }

    this.max = function () {
        return maxNode(root);
    };

    function maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    this.search = function (key) {
        return searchNode(root, key)
    };

    function searchNode(node, key) {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            searchNode(node.left, key)
        } else if (key < node.key) {
            searchNode(node.right, key)
        } else {
            return true;
        }
    }

    this.remove = function (key) {
        return  removeNode(root,key)
    };

    function removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }

        //相等 已经找到;
        else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // 第三种场景：有两个子节点
            // 首先加入辅助节点，同时找寻右子节点中的最小节点
            // 并把当前节点替换为右子节点中的最小节点
            // 同时为了避免节点重复，移除右子节点中的最小节点

            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            // 处理完直接return节点
            return node;

        }
    }

    function  findMinNode() {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node
        }
        return null;
    }

}