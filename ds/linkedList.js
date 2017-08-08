function LinkedList() {

    let Node = function (ele) {
        this.element = ele;
        this.next = null;
    };

    let length = 0;
    let head = null;

    /**
     * 向单向链表尾部添加元素
     * @param  {Any} element 要加入链表的节点
     */
    this.append = function (ele) {
        let node = new Node(ele);
        let current;
        if (head === null) {
            head = node;
        } else {
            // 当前项等于链表头部元素.
            // while循环到最后一个，从而将该节点加入链表尾部。
            current = head;
            // 当next为null时，判定为false。退出循环

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        length++;
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
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = node;
                node.next = current;
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
            } else {
                while (index++ < position) {
                    // previous指要操作元素位置之前的那个元素，current表示之后的那个元素。
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;

        } else {
            return null;
        }
    };
    this.getHead = function () {
        return head;
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

}