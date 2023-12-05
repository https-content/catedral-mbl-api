import { Router } from "express";
import ContentController from "../controllers/content";

const contentRouter = Router();

const { createContent, listContents } = new ContentController();

contentRouter.post("/", createContent);
contentRouter.get("/", listContents);

export default contentRouter;
