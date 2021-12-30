const gulp = require("gulp");
const clean = require("gulp-clean");
const cache = require("gulp-cache");

let cacheClear = (done) => {
  cache.clearAll();
  done();
};

let distDelete = (done) => {
  return gulp.src("./dist", { read: false, allowEmpty: true }).pipe(clean());
  done();
};

exports.cacheClear = cacheClear;
exports.distDelete = distDelete;
