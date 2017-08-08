//include {LinkedList} from './linkedList'
function partialUsingArguments(fn) {

    return function () {

        return fn.apply(null, Array.prototype.slice.apply(arguments, [1, arguments.length]));

    }

}




function HashTable() {
    let table = {};

    function ValuePair(key, value) {
        this.key = key;
        this.vaule = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.vaule + ']';
        }
    }
    this.put = function (key, value) {
        let position = loseLoseHashCode(key);
        //使用LinkedList
        if (table[position] == undefined) {
            talbe[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    this.remove = function (key) {
        let position = loseLoseHashCode(key);

        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.elements.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            if (current.element.key === key) { //{16}
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;

    };

    this.get = function (key) {
        let position = loseLoseHashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key = key) {
                    return current.element.vaule;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;

    };

    function loseLoseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37;
    }

    //更好的散列函数
    function djb2HashCode(key) {
        let hash = 5381; //{1}
        for (let i = 0; i < key.length; i++) { //{2}
            hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
    };
}