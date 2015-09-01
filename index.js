'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = gulpTasks;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('./gulp/');

var _gulp2 = _interopRequireDefault(_gulp);

function gulpTasks(gulp, config) {
  var tasks = (0, _gulp2['default'])(gulp, config);

  // build static page
  gulp.task('build', ['build:copy', 'build:appcache', 'build:html', 'build:css', 'build:js']);

  // lint, build then watch
  gulp.task('default', ['lint', 'build', 'watch', 'server']);

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

  gulp.task('server', ['build', 'compress'], tasks.server);

  gulp.task('watch', ['build', 'compress'], tasks.watch);

  return gulp;
}

module.exports = exports['default'];