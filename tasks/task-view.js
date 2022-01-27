const gulp = require("gulp");
const concat = require("gulp-concat");
const beautify = require("gulp-beautify");

const sections = {
  index: [
    "./src/views/header/head.html",
    "./src/views/header/header.html",
    "./src/views/home.html",
    "./src/views/footer/footer.html",
    "./src/views/footer/foot.html",
  ],
  sold2: [
    "./src/views/header/head.html",
    "./src/views/header/header.html",
    "./src/views/sold2.html",
    "./src/views/footer/footer.html",
    "./src/views/footer/foot.html",
  ],
  sold3: [
    "./src/views/header/head.html",
    "./src/views/header/header.html",
    "./src/views/sold3.html",
    "./src/views/footer/footer.html",
    "./src/views/footer/foot.html",
  ],
  "ashbourne-circle-san-ramon-ca": [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/ashbourne-circle-san-ramon-ca.html",
    "./src/views/footer/footer.html",
    "./src/views/footer/foot.html",
  ],
  "compass-concierge": [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/compass-concierge.html",
    "./src/views/footer/footer.html",
    "./src/views/footer/foot.html",
  ],
};

const createTask = (key) => {
  gulp.task(key, () => {
    return gulp
      .src(sections[key])
      .pipe(concat(key + ".html"))
      .pipe(
        beautify.html({
          indent_size: 2,
        })
      )
      .pipe(gulp.dest("./dist"));
  });
};

let tasks = [];

for (const key in sections) {
  createTask(key);
  tasks.push(key);
}

exports.views = gulp.series(tasks);
