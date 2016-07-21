var gulp = require("gulp"),
    browserify = require("browserify"),
    vueify = require('vueify'),
    source = require('vinyl-source-stream'),

    notify = require('gulp-notify'),
    useref = require('gulp-useref'),
    clean = require('gulp-clean'),
    gulpif = require('gulp-if'),
    rev = require("gulp-rev"),
    revReplace = require("gulp-rev-replace");

gulp.task('clean', function () {
  return gulp.src('public/static/js/bundle-*', {read: false})
    .pipe(clean());
});

gulp.task("watch", ["html"], function() {
  gulp.watch(["src/index.html", "src/**/*.vue", "src/**/*.js",
              "!src/dist/**"],
             ["html", function(event) {
  }]);
});

gulp.task("html", ["clean", "bundle-js"], function(){
  return gulp.src("./src/index.html")
    .pipe(useref())
    .pipe(gulpif('*.js', rev()))
    .pipe(gulpif('*.css', rev()))
    .pipe(revReplace())
    .pipe(gulp.dest("./public"));
});

gulp.task("bundle-js", function() {
  return browserify('./src/main.js')
    .transform(vueify)
    .bundle()
    .on('error', function(err){
      console.error('' + err);
      gulp.src('').pipe(notify('✖ Bunlde Failed ✖'));
      this.emit('end');
    })
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./src/dist"));
});

gulp.task("default", ["html"]);
