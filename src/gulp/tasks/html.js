export function html(g, conf, p) {
  const {dirs, server, files, locals} = conf;
  if (!files.html) { return cb => cb(); }

  const {env, socialAccounts, menuItems, jadeDirs} = conf;

  return () => files.html.map(source => g.src(source.src)
                        .pipe(p.jade({
                          jade: p.compileJade,
                          pretty: true,
                          locals,
                        }))
                        .on('error', p.util.log)
                        .pipe(g.dest(source.out))
                        .pipe(p.livereload())
              );
}
