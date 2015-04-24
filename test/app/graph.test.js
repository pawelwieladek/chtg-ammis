describe("Algorithm", function() {
    var Graph = require("../../app/graph");

    it("Constructor", function() {
        // when
        var graph = new Graph();

        // then
        expect(graph.nodes.size).to.equal(0);
        expect(graph.colors.size).to.equal(0);
    });

    it("From JSON", function() {
        // given
        var nodes = {
            1: [2],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 6, 5],
            5: [2, 4],
            6: [4]
        };

        // when
        var graph = Graph.fromJSON(nodes);

        // then
        expect(graph.nodes.size).to.equal(6);
        expect(graph.nodes.has("0")).to.equal(false);
        expect(graph.nodes.has("3")).to.equal(true);
        expect(graph.nodes.get("3").neighbours.size).to.equal(2);
    });

    it("Update", function() {
        // given
        var nodes = {
            1: [2],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 6, 5],
            5: [2, 4],
            6: [4]
        };
        var graph = Graph.fromJSON(nodes);

        // when
        graph.update("1", 1);

        // then
        expect(graph.colors.filter(c => c !== null).keySeq().toJS()).to.deep.equal(["1"]);
    });

    it("Color", function() {
        // given
        var nodes = {
            1: [2],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 6, 5],
            5: [2, 4],
            6: [4]
        };
        var graph = Graph.fromJSON(nodes);

        // when
        graph.update("1", 1);

        // then
        expect(graph.color("1")).to.equal(1);
    });

    it("Uncolored", function() {
        // given
        var nodes = {
            1: [2],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 6, 5],
            5: [2, 4],
            6: [4]
        };
        var graph = Graph.fromJSON(nodes);

        // when
        graph.update("1", 1);
        graph.update("3", 1);

        // then
        expect(graph.uncolored().keySeq().toJS()).to.deep.equal(["2", "4", "5", "6"]);
    });
});