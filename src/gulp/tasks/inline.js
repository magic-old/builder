export function inline(g, conf, p) {
  const src = p.join(conf.dirs.out, 'home.html');
  const newName = 'index.html';
  const imgSrc = p.join(conf.dirs.out, conf.dirs.img);
  const out = conf.dirs.out;

  return () => g.src(src)
                .pipe(p.inline({
                  base: out,
                  js: p.uglify(),
                  css: p.minifyCss(),
                }))
                .on('error', p.util.log)
                .pipe(p.inlineImageHtml(imgSrc))
                .on('error', p.util.log)
                .pipe(p.minifyHtml())
                .on('error', p.util.log)
                .pipe(p.rename(newName))
                .pipe(g.dest(out))
                .pipe(p.livereload());
}
