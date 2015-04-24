var Node = require("./node");

class Algorithm {

    /**
     * Find nodes without neighbours coloured with current color
     * @param graph Graph
     * @param currentColor Current color
     * @returns Map of nodes
     */
    static availableNodes(graph, currentColor) {
        return graph.nodes.filter((node, key) => graph.color(key) === null && node.neighbours.every(v => graph.color(v) !== currentColor));
    }

    /**
     * Find node with minimal list of uncoloured neighbours
     * @param graph Graph
     * @param availableNodes Nodes without neighbours coloured with current color
     * @returns Node with minimal list of uncoloured neighbours
     */
    static minimalNode(graph, availableNodes) {
        return graph.nodes.keyOf(availableNodes.minBy(v => v.neighbours.count(u => graph.color(u) === null)));
    }

    static reduceColors(graph) {
        return graph.nodes.reduce((sum, v, k) => sum + graph.color(k), 0);
    }

    static chromaticSum(graph) {
        graph = graph.clone();
        var currentColor = 1;
        while (graph.uncolored().size > 0) {
            var availableNodes = Algorithm.availableNodes(graph, currentColor);
            if (availableNodes.size > 0) {
                var minimalNode = Algorithm.minimalNode(graph, availableNodes);
                graph.update(minimalNode, currentColor);
            } else {
                currentColor = currentColor + 1;
            }
        }
        return Algorithm.reduceColors(graph);
    }
}

module.exports = Algorithm;