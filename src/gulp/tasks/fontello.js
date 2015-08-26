export function fontello(g, conf, p) {
  const dist = p.join(conf.dirs.src, 'fontello');
  const config = p.join(process.cwd(), 'fontello.json');

  return () => g.src(config)
                .pipe(p.fontello(config))
                .on('error', p.util.log)
                .pipe(g.dest(dist))
                .pipe(p.livereload());
}
