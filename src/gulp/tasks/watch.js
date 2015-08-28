export function watch(g, conf, p) {
  const {port} = conf;
  const {js, css, html, pages, assets, v1} = conf.dirs;
  const {config, src, appcache} = conf.watch;

  const basePath = '/';
  const host = 'localhost';

  return () => {
    p.livereload.listen({basePath, host});

    g.watch(`${src}/${js}/**/*.js`, ['build:js']);
    g.watch(`${src}/${v1}/${js}/**/*.js`, ['build:js']);
    g.watch(`${src}/${css}/**/*.styl`, ['build:css']);
    g.watch(`${src}/${v1}/${css}/**/*.styl`, ['build:css']);
    g.watch(`${src}/${html}/**/*.jade`, ['build:html']);
    g.watch(`${src}/${v1}/${html}/**/*.jade`, ['build:html']);
    g.watch(`${config}/*`, ['build']);
    g.watch('config.js', ['build']);
    g.watch(`${src}/${assets}/**/*`, ['build:copy']);
    g.watch(`${src}/${v1}/${assets}/**/*`, ['build:copy']);
    g.watch(`${src}/${appcache}`, ['build:appcache']);
  }
}
