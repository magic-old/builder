export function html(g, conf, p) {
  const src = p.join(conf.dirs.src, conf.dirs.html, conf.dirs.pages, '*.jade');
  const out = conf.dirs.out;

  const {env, socialAccounts, menuItems} = conf;

  return () => g.src(src)
                .pipe(p.jade({
                  jade: p.compileJade,
                  pretty: true,
                  locals: {
                    env,
                    socialAccounts,
                    menuItems,
                  },
                }))
                .on('error', p.util.log)
                .pipe(g.dest(out))
                .pipe(p.livereload());
}
