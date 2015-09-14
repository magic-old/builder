export function lint(g, conf, p) {
  const {config, dirs} = conf;
  const {jscsrc} = config;
  if (!dirs || !jscsrc) { return cb => cb(); }

  const src = [
    p.join(dirs.gulp, '**', '*.js'),
    p.join(dirs.src, dirs.js, '**', '*.js'),
  ];

  return (cb) => g.src(src)
                  .pipe(p.jscs({
                    configPath: p.join(conf.dirs.config, jscsrc),
                  }))

                  // Suppress errors to pass them downwards
                  .on('error', () => { null; })

                  .pipe(p.jscsStylish());
}
