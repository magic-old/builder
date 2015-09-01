import {createServer} from 'http';

export function server(g, conf, p) {

  return (done) => {
    if (conf.env === 'development') {
      let mount = p.st({
            path: conf.dirs.out,
            url: '/',
            cache: false,
            index: 'index.html',
          });

      createServer(mount)
        .listen(conf.port, done);
    } else {
      require('magicserver');
    }
  }
}
