function Dictionary() {

    let items = {};

    this.has = function (key) {
        return items.hasOwnProperty(key);
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete  items[key];
            return true;
        }
        return false;
    };

    this.get = function (key) {
        if (key) {
            return this.has(key) ? items[key] : undefined;
        } else {
            return items;
        }
    };

    this.values = function () {
        let values = [];
        for (let k in items) {
            if (this.has(key)) {
                values.push(items[k])
            }
        }
        return values;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.keys = function () {
        return Object.keys(items);
    }

}