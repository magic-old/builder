export function stylint(g, conf, p) {
  const {dirs} = conf;
  const {stylintrc} = conf.config;
  const srcFiles = p.join(dirs.src, dirs.css, 'main.styl');
  const config = p.join(dirs.config, stylintrc);

  return () => g.src(srcFiles)
                .pipe(p.stylint({config}));
}
