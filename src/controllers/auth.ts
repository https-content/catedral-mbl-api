import { Request, Response } from "express";

export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    return res.json({
      message: "sign in function",
    });
  } catch (error) {
    throw res.status(500).json({
      message: "Erro interno",
      error: JSON.stringify(error),
    });
  }
}
