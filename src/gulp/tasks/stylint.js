export function stylint(g, conf, p) {
  if (!conf || !conf.dirs || !conf.config || !conf.config.stylintrc) { return cb => cb(); }

  const {dirs} = conf;
  const {stylintrc} = conf.config;
  const srcFiles = p.join(dirs.src, dirs.css, 'main.styl');
  const config = p.join(dirs.config, stylintrc);

  return () => g.src(srcFiles)
                .pipe(p.stylint({config}));
}
