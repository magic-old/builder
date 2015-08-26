export function appcache(g, conf, p) {
  const {dirs, watch} = conf;
  const src = p.join(dirs.src, watch.appcache);

  return () => {
    const date = new Date();

    return g.src(src)
      .pipe(p.replace('|date|', date))
      .on('error', p.util.log)
      .pipe(p.replace('|pages|', conf.pages))
      .on('error', p.util.log)
      .pipe(g.dest(dirs.out))
      .pipe(p.livereload());
  }
}
