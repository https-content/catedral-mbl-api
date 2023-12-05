import { Router } from "express";
import { createContent, listContents } from "../controllers/content";

const contentRouter = Router();

contentRouter.post("/", createContent);
contentRouter.get("/", listContents);

export default contentRouter;
