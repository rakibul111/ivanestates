const { watch } = require("gulp");
const browserSync = require("browser-sync").create();

// include tasks
const html = require("./task-view");
const css = require("./task-style");
const js = require("./task-script");

let htmlTask = () => {
  html.views();
};

let cssTask = () => {
  css.beautify();
  css.minify();
};

let jsTask = () => {
  js.beautify();
  js.minify();
};

let serve = (done) => {
  htmlTask();
  cssTask();
  jsTask();

  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  watch(["./src/**/*.html"], (done) => {
    htmlTask();
    browserSync.reload();
    done();
  });

  watch(["./src/scss/**/*.scss"], (done) => {
    cssTask();
    browserSync.reload();
    done();
  });

  watch(["./src/js/**/*.js"], (done) => {
    jsTask();
    browserSync.reload();
    done();
  });

  done();
};

exports.serve = serve;
