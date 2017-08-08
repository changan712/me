function Queue() {

    let items = [];

    this.enqueue = function (item) {
        items.push(item)
    };
    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return itmes[0];
    };

    this.isEmpty = function() {
        return items.length === 0
    };

    this.size = function() {
        return items.length;
    };

    this.clear = function() {
        items = [];
    };

    this.print = function() {
        console.log(items.toString());
    };

}