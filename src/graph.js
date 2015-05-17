var { Map, Repeat } = require("immutable");
var Node = require("./node");

class Graph {
    constructor() {
        this._colors = Map();
        this._nodes = Map();
    }

    get nodes() {
        return this._nodes;
    }

    get colors() {
        return this._colors;
    }

    static fromJSON(map) {
        var graph = new Graph();
        graph._nodes = Map(map).mapEntries(([k, v]) => [k, new Node(v)]);
        graph._colors = Map(graph.nodes.keySeq().zip(Repeat(null, graph.nodes.size)));
        return graph;
    }

    clone() {
        var graph = new Graph();
        graph._nodes = Map(this._nodes);
        graph._colors = Map(this._colors);
        return graph;
    }

    update(nodeKey, color) {
        this._colors = this._colors.set(nodeKey.toString(), color);
    }

    color(nodeKey) {
        return this.colors.get(nodeKey.toString());
    }

    uncolored() {
        return this.nodes.filter((v, k) => this.color(k) === null);
    }
}

module.exports = Graph;