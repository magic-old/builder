export function compress(g, conf, p) {
  const {dirs, files} = conf;

  const src = [
    p.join(dirs.out, '**', files.compress),
  ];

  return () => g.src(src)
                .pipe(p.gzip({
                  gzipOptions: {
                    level: 9,
                    append: true,
                  },
                }))
                .on('error', p.util.log)
                .pipe(g.dest(dirs.out))
                .pipe(p.livereload());
}
