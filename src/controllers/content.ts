import { Request, Response } from "express";
import { Content } from "../models/content";

export type ContentQuery = {
  showPrivate?: boolean;
  limit?: number;
  offset?: number;
};

export async function createContent(req: Request, res: Response) {
  try {
    const {
      bannerUrl,
      createdAt,
      description,
      file,
      title,
      updatedAt,
      youtubeLink,
    }: Content = req.body;
  } catch (error) {
    throw res.status(500).json({
      message: "Internal server error",
      error: JSON.stringify(error),
    });
  }
}

export async function listContents(req: Request, res: Response) {
  const { query } = req;

  const parsedQuery: ContentQuery = {
    limit: 5,
    offset: 0,
    showPrivate: false,
    ...query,
  };

  console.log({ parsedQuery });

  try {
  } catch (error) {
    throw res.status(500).json({
      message: "Internal server error",
      error: JSON.stringify(error),
    });
  }
}
