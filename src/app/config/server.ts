import express from "express";
import contentRouter from "../../routes/content";
import topicRouter from "../../routes/topic";

const server = express();
server.use(express.json());
server.use("/content", contentRouter);
server.use("/topic", topicRouter);

export default server;
