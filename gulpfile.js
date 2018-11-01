var babel = require("gulp-babel");
var gulp = require("gulp");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
const minifyCSS = require("gulp-csso");
const sass = require("gulp-sass");
var uglify = require('gulp-uglify');

sass.compiler = require("node-sass");

var chemins = {
  src: "./src/",
  css: "./src/css/",
  scss: "./src/scss/",
  dist: "./dist/",
  demo: "./docs/demo/"
};



gulp.task("dist:htmltable-extension.min.js", () => {
  return gulp.src([
      "src/ag-grid-community.js"
    ])
    .pipe(concat("htmltable-extension.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(chemins.dist + "js/"))
});

gulp.task("demo:htmltable-extension.min.js", () => {
  return gulp.src([
      "src/ag-grid-community.js"
    ])
    .pipe(concat("htmltable-extension.min.js"))
    .pipe(uglify())
    .pipe(babel({
      presets: ["env"],
      compact: false,
      comments: false
    }))
    .pipe(gulp.dest(chemins.demo + "modules/htmltable-extension/dist/js/"))
});


gulp.task("demo:vendor", () => {
  return gulp.src([
      "./node_modules/htmlelement-extension/dist/htmlElement.min.js",
      "./node_modules/htmlelement-events-extension/dist/htmlElement-events.min.js"
    ])
    .pipe(gulp.dest(chemins.demo + "modules/"))
});



gulp.task("dist", ["dist:htmltable-extension.min.js", "dist:css"]);
gulp.task("demo", ["demo:vendor", "demo:htmltable-extension.min.js", "demo:css"]);

gulp.task("watch:htmltable-extension.min.js", function() {
  watch("./src/ag-grid-community.js", function() {
    gulp.run("dist:htmltable-extension.min.js");
    gulp.run("demo:htmltable-extension.min.js");
  });
});



gulp.task("dist:css", function() {
  return gulp.src("./src/css/*.css")
    // .pipe(sass().on("error", sass.logError))
    //  .pipe(concat("style.min.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest(chemins.dist + "css/"));
});

gulp.task("demo:scss", function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    //  .pipe(concat("style.min.css"))
    //  .pipe(minifyCSS())
    .pipe(gulp.dest(chemins.demo + "modules/htmltable-extension/dist/css/"));
});

gulp.task("demo:css", function() {
  return gulp.src("./src/css/*.css")
    .pipe(sass().on("error", sass.logError))
    //  .pipe(concat("style.min.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest(chemins.demo + "modules/htmltable-extension/dist/css/"));
});

gulp.task("watch:css", function() {
  gulp.watch("./src/scss/*.scss", ["dist:css", "demo:css"]);
});

gulp.task("default", ["demo", "dist"]);

gulp.task("watch", [
  "watch:htmltable-extension.min.js",
  "watch:css"
]);