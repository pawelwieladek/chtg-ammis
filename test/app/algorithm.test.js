describe("Algorithm", function() {
    var Node = require("../../app/node");
    var Algorithm = require("../../app/algorithm");

    it("Constructor", function() {
        // given
        var nodes = [
            new Node([1]),
            new Node([0, 2, 3]),
            new Node([1, 3]),
            new Node([1, 2])
        ];

        // when
        var algorithm = new Algorithm(nodes);

        // then
        expect(algorithm.nodes.size).to.equal(4);
        expect(algorithm.currentColor).to.equal(1);
    });

    it("Find nodes without neighbours coloured with current color", function() {
        // given
        var a = new Node([1]);
        a.color = 1;
        var b = new Node([0, 2, 3]);
        var c = new Node([1, 3]);
        var d = new Node([1, 2]);
        var nodes = [a, b, c, d];
        var algorithm = new Algorithm(nodes);

        // when
        var availableNodes = algorithm.availableNodes().toArray();

        // then
        expect(availableNodes).to.deep.equal([c, d]);
    });

    it("Find node with minimal list of uncoloured neighbours", function() {
        // given
        var a = new Node([1]);
        a.color = 1;
        var b = new Node([0, 2, 3]);
        var c = new Node([1, 3]);
        var d = new Node([1, 2, 4]);
        var e = new Node([3]);
        var nodes = [a, b, c, d, e];
        var algorithm = new Algorithm(nodes);
        var list = algorithm.availableNodes();

        // when
        var minimalNode = algorithm.minimalNode(list);

        // then
        expect(minimalNode).to.equal(e);
    });

    describe("Chromatic sum", function() {
        it("simple", function() {
            // given
            var a = new Node([1]);
            var b = new Node([0, 2, 3]);
            var c = new Node([1, 3]);
            var d = new Node([1, 2, 4]);
            var e = new Node([3]);
            var nodes = [a, b, c, d, e];
            var algorithm = new Algorithm(nodes);

            // when
            algorithm.colorAllNodes();
            var chromaticSum = algorithm.chromaticSum();

            // then
            expect(chromaticSum).to.equal(8);
        });
        it("tricky", function() {
            // given
            var nodes = [
                new Node([3]),
                new Node([3]),
                new Node([3]),
                new Node([0, 1, 2, 4]),
                new Node([3, 5, 6, 7]),
                new Node([4]),
                new Node([4]),
                new Node([4])
            ];
            var algorithm = new Algorithm(nodes);

            // when
            algorithm.colorAllNodes();
            var chromaticSum = algorithm.chromaticSum();

            // then
            expect(chromaticSum).to.equal(11);
        });
    });
});