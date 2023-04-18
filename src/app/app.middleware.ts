import { Request, Response } from "express";

export function logRequestTimeMiddleware(
  req: Request,
  res: Response,
  next: () => void
) {
  console.log("Time: ", Date.now());
  next();
}
