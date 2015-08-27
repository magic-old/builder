export function copy(g, conf, p) {
  const {dirs, files} = conf;

  const src = [
    p.join(dirs.src, dirs.assets, '**', files.copy),
  ];

  return (cb) => g.src(src)
                  .pipe(g.dest(dirs.out))
                  .on('error', p.util.log)
                  .pipe(p.livereload());
}
