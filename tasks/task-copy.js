const gulp = require("gulp");

let htaccess = (done) => {
  return gulp.src("./src/.htaccess").pipe(gulp.dest("./dist"));
  done();
};

let fonts = (done) => {
  return gulp.src("./src/fonts/**/*").pipe(gulp.dest("./dist/fonts"));
  done();
};

let vendor = (done) => {
  return gulp.src("./src/vendor/**/*").pipe(gulp.dest("./dist/vendor"));
  done();
};

let media = (done) => {
  return gulp.src("./src/media/**/*").pipe(gulp.dest("./dist/media"));
  done();
};

exports.htaccess = htaccess;
exports.fonts = fonts;
exports.vendor = vendor;
exports.media = media;
