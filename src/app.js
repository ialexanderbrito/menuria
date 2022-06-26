const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://alexander:alexander@menuria.ggeef.mongodb.net/menuria?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use((request, response, next) => {
  request.io = io;
  return next();
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, () => console.log('🚀 Backend started!'));
