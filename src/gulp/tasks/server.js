import {createServer} from 'http';

export function server(g, conf, p) {
  const {env, dirs, port} = conf || 'development';

  return (done) => {
    if (env === 'development') {
      let mount = p.st({
            path: dirs.out,
            url: '/',
            cache: false,
            index: 'index.html',
          });

      createServer(mount)
        .listen(port, done);
    } else {
      require('server');
    }
  }
}
