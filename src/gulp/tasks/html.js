export function html(g, conf, p) {
  const {dirs, server} = conf;
  const sources = [
    {
      src: p.join(dirs.src, dirs.html, dirs.pages, '*.jade'),
      out: dirs.out,
    },
    {
      src: p.join(dirs.src, dirs.v1, dirs.html, dirs.pages, '*.jade'),
      out: p.join(dirs.out, dirs.v1),
    },
  ];

  const out = dirs.out;

  const {env, socialAccounts, menuItems, jadeDirs} = conf;

  return () => sources.map(source => g.src(source.src)
                      .pipe(p.jade({
                        jade: p.compileJade,
                        pretty: true,
                        locals: {
                          env,
                          socialAccounts,
                          menuItems,
                          dirs: server.dirs,
                        },
                      }))
                      .on('error', p.util.log)
                      .pipe(g.dest(source.out))
                      .pipe(p.livereload())
                );
}
