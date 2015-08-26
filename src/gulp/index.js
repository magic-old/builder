import babelify from 'babelify';
import browserify from 'browserify';
import compileJade from 'jade';
import del from 'del';
import http from 'http';
import nib from 'nib';
import source from 'vinyl-source-stream';
import st from 'st';
import {join} from 'path';
import {readdirSync, existsSync} from 'fs-extra';

import copy from 'gulp-copy';
import gzip from 'gulp-gzip';
import ignore from 'gulp-ignore';
import inject from 'gulp-inject-string';
import jade from 'gulp-jade';
import jscs from 'gulp-jscs';
import jscsStylish from 'gulp-jscs-stylish';
import livereload from 'gulp-livereload';
import replace from 'gulp-replace';
import stylint from 'gulp-stylint';
import stylus from 'gulp-stylus';
import util from 'gulp-util';
import watch from 'gulp-watch';

export default function getTasks(gulp, config) {

  const plugins = {
    babelify,
    browserify,
    compileJade,
    copy,
    del,
    gzip,
    http,
    ignore,
    inject,
    jade,
    join,
    jscs,
    jscsStylish,
    livereload,
    nib,
    replace,
    source,
    st,
    stylint,
    stylus,
    util,
    watch,
  }

  Object.keys(plugins);

  let taskList = [];
  let tasks = readdirSync(join(__dirname, 'tasks'));
  tasks.forEach((task) => {
    taskList[task] = tasks[task];
  });

  tasks = {};
  Object.keys(taskList).forEach((key) => {
    key = key.replace('.js', '');
    let taskSrc = join(__dirname, 'tasks', key);
    let task = require(taskSrc);
    if (!task || typeof task[key] !== 'function') {
      return console.log('Task is not a function:', key);
    }

    tasks[key] = task[key](gulp, config, plugins);
  });

  return tasks;
}
