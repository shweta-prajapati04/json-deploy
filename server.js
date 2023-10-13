const server = require("json-server");
const jsonServer=require("json-server")
server=jsonServer.create();
router=jsonServer.router("db.json")
middlewares=jsonServer.defaults();
const port=process.env.PORT || 8090

server.use(middlewares);
server.use(router);
server.listen(port)