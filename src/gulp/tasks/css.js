export function css(g, conf, p) {
  const {dirs, files} = conf;
  const src = p.join(dirs.src, '**', dirs.css, 'main.styl');
  const out = p.join(dirs.out);

  if (!src) { return cb => cb(); }

  return (cb) => g.src(src)
                  .pipe(p.stylus({
                    pretty: true,
                    use: p.nib(),
                    compress: false,
                  }))
                  .on('error', p.util.log)
                  .pipe(g.dest(out))
                  .pipe(p.livereload());
}
