import {createServer} from 'http';

export function server(g, conf, p) {
  const {out} = conf.dirs;

  return (done) => {
    createServer(
      p.st({
        path: out,
        url: '/',
        cache: false,
        index: 'index.html',
      })
    )
    .listen(conf.port, done);
  }
}
