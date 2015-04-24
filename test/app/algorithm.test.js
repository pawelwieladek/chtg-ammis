describe("Algorithm", function() {
    var Graph = require("../../app/graph");
    var Algorithm = require("../../app/algorithm");

    it("Find nodes without neighbours coloured with current color", function() {
        // given
        var nodes = {
            0: [1],
            1: [0, 2, 3],
            2: [1, 3],
            3: [1, 2]
        };
        var graph = Graph.fromJSON(nodes);
        var currentColor = 1;
        graph.update("0", currentColor);

        // when
        var availableNodes = Algorithm.availableNodes(graph, currentColor).keySeq().toJS();

        // then
        expect(availableNodes).to.deep.equal(["2", "3"]);
    });

    it("Find node with minimal list of uncoloured neighbours", function() {
        // given
        var nodes = {
            0: [1],
            1: [0, 2, 3],
            2: [1, 3],
            3: [1, 2, 4],
            4: [3]
        };
        var graph = Graph.fromJSON(nodes);
        var currentColor = 1;
        graph.update("0", currentColor);
        var availableNodes = Algorithm.availableNodes(graph, currentColor);

        // when
        var minimalNode = Algorithm.minimalNode(graph, availableNodes);

        // then
        expect(minimalNode).to.equal("4");
    });

    describe("Reduce colors", function() {
        // given
        var nodes = {
            0: [1],
            1: [0, 2, 3],
            2: [1, 3],
            3: [1, 2, 4],
            4: [3]
        };
        var graph = Graph.fromJSON(nodes);
        graph.update("0", 1);
        graph.update("1", 2);
        graph.update("2", 1);
        graph.update("3", 3);
        graph.update("4", 1);

        // when
        var sum = Algorithm.reduceColors(graph);

        // then
        expect(sum).to.equal(8);
    });

    describe("Chromatic sum", function() {
        it("simple", function() {
            // given
            var nodes = {
                0: [1],
                1: [0, 2, 3],
                2: [1, 3],
                3: [1, 2, 4],
                4: [3]
            };
            var graph = Graph.fromJSON(nodes);

            // when
            var chromaticSum = Algorithm.chromaticSum(graph);

            // then
            expect(chromaticSum).to.equal(8);
        });
        it("tricky", function() {
            // given
            var nodes = {
                0: [3],
                1: [3],
                2: [3],
                3: [0, 1, 2, 4],
                4: [3, 5, 6, 7],
                5: [4],
                6: [4],
                7: [4]
            };
            var graph = Graph.fromJSON(nodes);

            // when
            var chromaticSum = Algorithm.chromaticSum(graph);

            // then
            expect(chromaticSum).to.equal(11);
        });
    });
});