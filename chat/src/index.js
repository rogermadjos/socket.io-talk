import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import http from 'http';
import Socket from 'socket.io';

const router = new Router(),
  app = new Koa();

app.use(serve('public'));
app.use(router.routes());

let port = +process.env.PORT || 8080
const server = http.createServer(app.callback()).listen(port);
console.log('Server is listening at port ' + port);
// Socket.IO
const io = Socket(server);
io.on('connection', function(socket) {
  socket.on('login', function(data) {
    console.log('login', data);
    socket.username = data.username;
    socket.emit('loggedIn', { username: data.username });
  });

  socket.on('message', data => {
    console.log(data);
    let payload = {
      username: socket.username,
      message: data.message
    };
    socket.broadcast.emit('message', payload);
    socket.emit('message', payload);
  });
});
