const gulp = require("gulp");
const concat = require("gulp-concat");
const beautify = require("gulp-beautify");

const sections = {
  pages: ["./src/views/pages.html"],
  index: [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/home.html",
    "./src/views/footer/foot.html",
    "./src/views/footer/footer.html",
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
  "work-detail": [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/work-detail.html",
    "./src/views/footer/foot.html",
    "./src/views/footer/footer.html",
  ],
  contact: [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/contact.html",
    "./src/views/footer/foot.html",
    "./src/views/footer/footer.html",
  ],
  about: [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/about.html",
    "./src/views/footer/foot.html",
    "./src/views/footer/footer.html",
  ],
  "blog-post": [
    "./src/views/header/head.html", //
    "./src/views/header/header.html",
    "./src/views/blog-post.html",
    "./src/views/footer/foot.html",
    "./src/views/footer/footer.html",
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
