var gulp = require("gulp");
var babel = require("gulp-babel");
var mocha = require("gulp-spawn-mocha");
var del = require("del");

gulp.task("clean", function (cb) {
  del(["dist/**/*.js"], cb);
});

gulp.task("test", function () {
    return gulp.src(["test/**/*.test.js"], { read: false })
        .pipe(mocha({
            compilers: "js:babel/register",
            reporter: "dot",
            require: "test/setup.js",
            istanbul: true
        }));
});

gulp.task("build", ["clean"], function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});
