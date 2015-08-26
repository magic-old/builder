export function lintHtml(g, conf, p) {
  const src = p.join(conf.dirs.out, '*.html');

  return () => g.src(src)
                .pipe(p.htmlhint())
                .pipe(p.livereload());
}
