export function copy(g, conf, p) {
  const {dirs} = conf;

  const src = [
    p.join(dirs.src, dirs.assets, '**', '*'),
  ];

  return (cb) => g.src(src)
                  .pipe(g.dest(dirs.out))
                  .on('error', p.util.log)
                  .pipe(p.livereload());
}
