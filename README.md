Chromatic Sum Algorithm
=======================

## Usage

### Defining graph
Graph is a map.
Keys of the map are node identifiers. They have to be unique.
Values of the map are lists of node identifiers which is a neighbours list.
If an identifier appears in a node's neighbours list this two nodes are connected with an edge.

```
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
```

### Calculating chromatic sum
Simply run the following:
```
var chromaticSum = Algorithm.chromaticSum(graph);
```

## Development
### Dependencies
You'll easily go through the code if you're familiar with the following technologies:
 - Node
 - Gulp
 - Mocha
 - ES6 (Babel)
 - Immutable.js

First:
```
npm install
```

Then:
```
gulp test
```

See test cases to see how it works.
Have fun!
