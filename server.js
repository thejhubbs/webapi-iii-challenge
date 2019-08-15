const express = require('express');
const server = express();
const PostsRouter = require('./router.js')

server.use(logger);

server.use(express.json());
server.use('/api/users', PostsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//   - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
//   - this middleware runs on every request made to the API
function logger(req, res, next) {
  console.log(`${req.method}: "${req.url}" @ ${Date.now()}`);
  next();
};

module.exports = server;
