'use strict';

import getTasks from './gulp/';

export default function gulpTasks(gulp, config) {
  const tasks = getTasks(gulp, config);

  // build static page
  gulp.task('build', [
    'build:copy',
    'build:appcache',
    'build:html',
    'build:css',
    'build:js',
  ]);

  // lint, build then watch
  gulp.task('default', ['lint', 'build', 'watch']);

  // lint css, jade and js
  gulp.task('lint', ['lint:css', 'lint:js']);

  // jade to html
  gulp.task('build:html', tasks.html);

  // lint css using stylint
  gulp.task('lint:css', tasks.stylint);
  // stylus to css
  gulp.task('build:css', tasks.css);

  // lint javascript using jscs
  gulp.task('lint:js', tasks.lint);
  // es6 to es5
  gulp.task('build:js', ['lint:js'], tasks.js);

  // generate date and urls for appcache file
  gulp.task('build:appcache', tasks.appcache);

  gulp.task('build:copy', tasks.copy);

  gulp.task('compress', ['build'], tasks.compress);

  gulp.task('build:clean', tasks.clean);
  gulp.task('clean', ['build:clean']);

  gulp.task('server', tasks.server);

  gulp.task('watch', ['build', 'compress', 'server'], tasks.watch);

  return gulp;
}
