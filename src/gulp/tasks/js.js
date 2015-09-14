export function js(g, conf, p) {
  const {dirs, files, config} = conf;
  const {babelrc} = config;
  const rc = p.join(dirs.config, babelrc);

  if (!files.js) { return cb => cb(); }

  return () => Object.keys(files.js).map(name => {
    const dir = files.js[name];

    const src = p.join(dirs.src, dir, name, 'index.js');
    const out = p.join(dirs.out, dir);

    const b = p.browserify(src);

    b.transform(p.babelify.configure({ babelrc: rc }))

    return b.bundle()
            .on('error', p.util.log)
            .pipe(p.source(`${name}.js`))
            .on('error', p.util.log)
            .pipe(g.dest(out))
            .pipe(p.livereload());
  });
}
