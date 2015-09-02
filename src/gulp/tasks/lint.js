export function lint(g, conf, p) {
  const src = [
    p.join(conf.dirs.gulp, '**', '*.js'),
    p.join(conf.dirs.src, conf.dirs.js, '**', '*.js'),
  ];
  const ignore = p.join(process.cwd(), conf.dirs.gulp, 'tasks.js');
  const {jscsrc} = conf.config;

  return (cb) => g.src(src)
                  .pipe(p.ignore.exclude(ignore))
                  .pipe(p.jscs({
                    configPath: p.join(conf.dirs.config, jscsrc),
                  }))

                  // Suppress errors to pass them downwards
                  .on('error', () => { null; })

                  .pipe(p.jscsStylish());
}
