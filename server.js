//Import libraries
const express = require("express");
const helmet = require("helmet");
//Import routers
const carRouter = require("./cars/cars-router");
//Activate imports
const server = express();
//Inject import functionality
server.use(helmet());
server.use(express.json());
//Declare server use routing
server.use("/api/cars", carRouter);
//Initial requests
server.get("/", (req, res) => {
  res.status("<h1>Welcome to the cars API!</h1>");
});
module.exports = server;
