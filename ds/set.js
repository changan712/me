function Set() {
    //value ================= key;
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function (value) {
        if (this.has(value)) {
            delete  items[value];
            return true;
        }

        return false;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.sizeLegacy = function () {
        let count = 0;
        for (let prop in items) {
            if (items.hasOwnProperty(prop)) {
                count++;
            }
        }
        return count;
    };
    this.values = function () {
        return Object.values(items);
    };
    this.valuesLegacy = function () {
        let values = [];
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };
    this.union = function (otherSet) {
        let unionSet = new Set();
        let values = this.values;
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    this.intersection = function (otherSet) {
        let interSectionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                interSectionSet.add(values[i])
            }
        }
        return interSectionSet;
    };

    /**
     * 差集;
     * @param otherSet
     * @return {Set}
     */
    this.difference = function (otherSet) {
        let deferenceSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                deferenceSet.add(values[i])
            }
        }
        return deferenceSet;
    };
    /**
     * 判断传入集合是否是子集；
     * @param otherSet
     * @return {boolean}
     */
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.vaues();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }

}
