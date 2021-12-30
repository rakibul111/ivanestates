const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegtran = require("imagemin-jpegtran");
// const imageminWebp = require('imagemin-webp');
const imageminZopfli = require("imagemin-zopfli");
const cache = require("gulp-cache");

let lossless = (done) => {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      cache(
        imagemin(
          [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
              plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
            }),
          ],
          {
            verbose: true,
          }
        ),

        // Options for 'gulp-cache' plugin.
        {
          name: "imageLossLess",
        }
      )
    )
    .pipe(gulp.dest("./dist/img"));

  done();
};

let lossy = (done) => {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      cache(
        imagemin(
          [
            //png
            imageminPngquant({
              speed: 2,
              //quality: [0.3, 0.5] // If conversion results in quality below the min quality the image won't be saved.
            }),

            //imagemin.optipng({optimizationLevel: 5}),

            imageminZopfli({
              more: true,
              // iterations: 50 // very slow but more effective
            }),

            //gif very light lossy, use only one of gifsicle or Giflossy
            imagemin.gifsicle({
              interlaced: true,
              optimizationLevel: 3,
            }),

            //svg
            imagemin.svgo({
              plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
            }),

            //jpg lossless
            imageminJpegtran({
              progressive: true,
            }),

            //jpg very light lossy, use vs jpegtran
            imagemin.mozjpeg({ quality: 75, progressive: true }),
          ],
          {
            verbose: true,
          }
        ),

        // Options for 'gulp-cache' plugin.
        {
          name: "imageLossy",
        }
      )
    )
    .pipe(gulp.dest("./dist/img"));

  done();
};

exports.lossless = lossless;
exports.lossy = lossy;
