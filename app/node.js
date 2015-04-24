var { List } = require("immutable");

class Node {
    constructor(neighbours) {
        this._neighbours = List(neighbours);
    }

    get neighbours() {
        return this._neighbours;
    }
}

module.exports = Node;