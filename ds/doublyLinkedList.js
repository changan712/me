function DoublyLinkedList() {

    let Node = function (ele) {
        this.element = ele;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    /**
     * 向单向链表尾部添加元素
     * @param  {Any} ele 要加入链表的节点
     * @return {Any} node;
     */
    this.append = function (ele) {
        let node = new Node(ele);
        let current;
        if (head === null) {
            head = node;
            tail = node;
        } else {
            let previous;
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            tail = node;
        }
        length++;
        return node;
    };

    /**
     * 向单向链表中插入某个元素
     * @param  {Number} position 要插入的位置
     * @param  {Any} element  要插入的元素
     * @return {Boolean}          插入成功返回true，失败返回false
     */
    this.insert = function (position, ele) {
        if (position > 0 && position <= length) {
            let node = new Node(ele);
            let current = head;
            let previous;
            let index = 0;

            if (position = 0) {
                if (head == null) {
                    head = node;
                    tail = node;
                } else {
                    current.prev = node;
                    node.next = current;
                    head = node;
                }

            } else if (position == length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.prev = previous;
                node.next = current;
                current.prev = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    /**
     * 寻找某个元素在单向链表中的位置
     * @param  {Any} element 要寻找的元素
     * @return {Number}         返回值>=0则代表找到相应位置
     */

    this.indexOf = function (ele) {
        let current = head;
        let index = 0;

        while (current) {

            if (ele == current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    /**
     *
     * @param {Any} ele
     */
    this.remove = function (ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index)
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            if (position == 0) {
                // 因为之前head指向第一个元素，现在把head修改为指向第二个元素。
                // 核心概念在于链表前后全靠指针链接，而非数组一般。
                // 所以只需要改变head的元素。
                head = current.next;
                if (length == 1) {
                    tail = null;
                    head.prev = null;
                }

            }
            else if (position == length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            }

            else {
                while (index++ < position) {
                    // previous指要操作元素位置之前的那个元素，current表示之后的那个元素。
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.isEmpty = function () {
        return length === 0;
    };
    this.toString = function () {
        let current = head;
        let string = '';

        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    };

    this.size = function () {
        return length;
    };
    this.showHead = function () {
        return head;
    };

    this.showTail = function () {
        return tail;
    };

}