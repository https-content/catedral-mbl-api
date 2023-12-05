import express from "express";
import contentRouter from "../../routes/content";
import topicRouter from "../../routes/topic";
import DatabaseConnectService from "./database";

const server = express();
const dbConnection = new DatabaseConnectService();

dbConnection.execute();

server.use(express.json());
server.use("/content", contentRouter);
server.use("/topic", topicRouter);

export default server;
