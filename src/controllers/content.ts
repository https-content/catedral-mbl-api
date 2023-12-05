import { Request, Response } from "express";

export default class ContentController {
  async createContent(req: Request, res: Response) {
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
      throw {
        message: "Internal server error",
        error,
      };
    }
  }

  async listContents(req: Request, res: Response) {
    const { query } = req;

    const parsedQuery: ContentQuery = {
      limit: 5,
      offset: 0,
      showPrivate: false,
      ...query,
    };

    console.log({ parsedQuery });

    try {
    } catch (error) {}
  }
}
