export function js(g, conf, p) {
  const {dirs, files} = conf;
  const src = p.join(dirs.src, dirs.js, files.js);
  const out = p.join(dirs.out, dirs.js);
  const {babelrc} = conf.config;
  const rc = p.join(dirs.config, babelrc);

  const b = p.browserify(src);

  b.transform(p.babelify.configure({ babelrc: rc }))

  return () => b.bundle()
                .on('error', p.util.log)
                .pipe(p.source('index.js'))
                .on('error', p.util.log)
                .pipe(g.dest(out))
                .pipe(p.livereload());
}
