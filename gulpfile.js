const gulp = require("gulp");

// include tasks
const html = require("./tasks/task-view");
const css = require("./tasks/task-style");
const js = require("./tasks/task-script");
const image = require("./tasks/task-image");
const copy = require("./tasks/task-copy");
const clean = require("./tasks/task-clean");

const { serve } = require("./tasks/server");

// build dist version
exports.build = gulp.series(
  clean.cacheClear,
  clean.distDelete,
  html.views,
  css.beautify,
  css.minify,
  js.beautify,
  js.minify,
  image.lossless,
  gulp.parallel(copy.htaccess, copy.fonts, copy.vendor, copy.media)
);

// liveserver
exports.serve = serve;

// // clear and clean
// gulp.task("clean:cache", (done) => {
//   clean.cacheClear();
//   done();
// });

// gulp.task("clean:dist", (done) => {
//   clean.distDelete();
//   done();
// });

// gulp.task("clear", (done) => {
//   clean.cacheClear();
//   clean.distDelete();
//   done();
// });
