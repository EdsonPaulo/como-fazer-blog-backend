"use strict";
const { createServer } = require("http");
const app = require("../app");
const debug = require("debug")("crud:server");

/* Normmalize the server port */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

/* Handling errors on server */
const onError = (error) => {
  if (error.syscall !== "listen") throw error;

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
};

/* Handling any server events */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Servidor escutando em " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
const server = createServer(app);

app.set("port", port);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("server running on " + port);
