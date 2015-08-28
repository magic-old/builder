export function copy(g, conf, p) {
  const {dirs, files, copy} = conf;

  return () => copy.map(source => {
    g.src(p.join(source.src, files.copy))
      .pipe(g.dest(source.out))
      .on('error', p.util.log)
      .pipe(p.livereload());
  });
}
