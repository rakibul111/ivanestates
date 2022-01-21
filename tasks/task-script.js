const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const beautify = require("gulp-beautify");
const sourcemaps = require("gulp-sourcemaps");

let js = [
  "./src/js/window.js", //
  "./src/js/preloader.js",
  "./src/js/footer.js",
  "./src/js/scroller.js",
  "./src/js/button.js",
  "./src/js/menu.js",
  "./src/js/modal.js",
  "./src/js/property-map.js",
];

let jsBeautify = (done) => {
  return gulp
    .src(js)
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(
      beautify.js({
        indent_size: 2,
      })
    )
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/js"));

  done();
};

let jsMinify = (done) => {
  return gulp
    .src(js)
    .pipe(sourcemaps.init())
    .pipe(concat("script.min.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/js"));

  done();
};

exports.beautify = jsBeautify;
exports.minify = jsMinify;
