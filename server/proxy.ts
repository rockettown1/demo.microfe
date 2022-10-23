const path = require("path");
const port = process.env.PORT || 80;

const Fastify = require("fastify");
const proxy = require("@fastify/http-proxy");
const fastifyStatic = require("@fastify/static");
const server = Fastify({
  logger: true,
});

server.register(fastifyStatic, {
  root: path.join(__dirname, "../", "lambdas", "header", "dist", "lambda"),
  prefix: "/demo-microfe/header/",
});

server.get("/hi", (request, reply) => {
  reply.send({ message: "hello" });
});

server.register(proxy, {
  upstream: "http://localhost:3001",
  prefix: "/",
  http2: false,
});

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
