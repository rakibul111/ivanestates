const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

let cssBeautify = (done) => {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        remove: false,
      })
    )
    .pipe(
      cssbeautify({
        indent: "  ",
        //openbrace: 'separate-line',
        autosemicolon: true,
      })
    )
    .pipe(rename("style.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css"));

  done();
};

let cssMinify = (done) => {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        remove: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css"));

  done();
};

exports.beautify = cssBeautify;
exports.minify = cssMinify;
