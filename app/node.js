var { List } = require("immutable");

class Node {
    constructor(neighbours) {
        this._color = null;
        this._neighbours = List(neighbours);
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get neighbours() {
        return this._neighbours;
    }
}

module.exports = Node;