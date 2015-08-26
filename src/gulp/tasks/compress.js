export function compress(g, conf, p) {
  const {out} = conf.dirs;

  const src = [
    p.join(out, 'index.html'),
    p.join(out, 'manifest.appcache'),
    p.join(out, 'favicon.gif'),
  ];

  return () => g.src(src)
                .pipe(p.gzip({
                  gzipOptions: {
                    level: 9,
                    append: true,
                  },
                }))
                .on('error', p.util.log)
                .pipe(g.dest(out))
                .pipe(p.livereload());
}
