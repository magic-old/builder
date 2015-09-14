export function watch(g, conf, p) {
  if (!conf.watch) { return cb => cb(); }

  const {port} = conf;
  const {js, css, html, pages, assets, v1} = conf.dirs;
  const {src, appcache, tasks} = conf.watch;

  const basePath = '/';
  const host = 'localhost';

  return () => {
    p.livereload.listen({basePath, host});

    if (tasks && typeof tasks.forEach === 'function') {
      tasks.forEach((task) => {
        if (task.src && task.tasks) {
          g.watch(task.src, task.tasks);
        }
      });
    }
  }
}
