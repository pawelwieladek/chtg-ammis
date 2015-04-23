var { Map, List, Range } = require("immutable");

class Algorithm {
    constructor(nodes) {
        this._color = 1;
        this._nodes = Map(Range(0, List(nodes).size).zip(nodes));
    }

    get nodes() {
        return this._nodes;
    }

    set nodes(value) {
        this._nodes = value;
    }

    get currentColor() {
        return this._color;
    }

    nextColor() {
        this._color = this._color + 1;
    }

    nodeColor(node) {
        return this.nodes.get(node).color;
    }

    /**
     * Find nodes without neighbours coloured with current color
     * @returns Map of nodes
     */
    availableNodes() {
        return this.nodes.filter(v => v.color === null && v.neighbours.every(u => this.nodeColor(u) !== this.currentColor));
    }

    /**
     * Find node with minimal list of uncoloured neighbours
     * @param availableNodes Nodes without neighbours coloured with current color
     * @returns Node with minimal list of uncoloured neighbours
     */
    minimalNode(availableNodes) {
        return availableNodes.minBy(v => v.neighbours.count(u => this.nodeColor(u) === null));
    }

    uncoloredNodes() {
        return this.nodes.filter(v => v.color === null);
    }

    colorAllNodes() {
        while (this.uncoloredNodes().size > 0) {
            var availableNodes = this.availableNodes();
            if (availableNodes.size > 0) {
                var minimalNode = this.minimalNode(availableNodes);
                var index = this.nodes.keyOf(minimalNode);
                minimalNode.color = this.currentColor;
                this.nodes = this.nodes.set(index, minimalNode);
            } else {
                this.nextColor();
            }
        }
    }

    chromaticSum() {
        return this.nodes.reduce((sum, v) => sum + v.color, 0);
    }
}

module.exports = Algorithm;