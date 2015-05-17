var fs = require("fs");
var path = require("path");
var stdio = require('stdio');

var Graph = require("./graph");
var Algorithm = require("./algorithm");

var options = stdio.getopt({
    "file": { key: "f", description: "File name from input/ directory", mandatory: true, args: 1}
});
var filename = options.file;
var filepath = path.join(__dirname, "../input", filename);

fs.readFile(filepath, { encoding: "utf-8" }, function(err, data){
    if (err) { console.log(err); return; }
    try {
      var json = JSON.parse(data);
      var graph = Graph.fromJSON(json);
      var result = Algorithm.chromaticSum(graph);
      console.log("Chromatic sum: " + result);
    } catch (e) {
      console.log(e);
    }
});
