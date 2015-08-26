export function clean(g, conf, p) {
  const out = conf.dirs.out;

  return (cb) => {
    p.del(out, () => {
      p.livereload();
      cb();
    });
  }
}
