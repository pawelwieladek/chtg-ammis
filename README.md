Chromatic Sum Algorithm
=======================

## Usage

### How to define a graph
Graph is a map.
Keys of the map are node identifiers. They have to be unique.
Values of the map are lists of node identifiers which is a neighbours list.
If an identifier appears in a node's neighbours list this two nodes are connected with an edge.

Example file:
```
{
    "0": [3],
    "1": [3],
    "2": [3],
    "3": [0, 1, 2, 4],
    "4": [3, 5, 6, 7],
    "5": [4],
    "6": [4],
    "7": [4]
}
```
The graph defined above is shown below.

![The tricky graph](/assets/graph.png "The tricky graph")

### How to run the app
1. Put this file (let's say ```example.json```) into ```input``` directory.
2. Build the app
```
gulp build
```
3. Run
```
node dist/app.js -f example.json
```
