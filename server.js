const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
//server.use('/api/v1', middlewares)
server.use(jsonServer.bodyParser); //coloquei parar ver se mantém os dados
//server.use('/api/v1', router)
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});