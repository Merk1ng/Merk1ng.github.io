"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("sass/style.sass")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.sass", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
