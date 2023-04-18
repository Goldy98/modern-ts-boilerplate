import { Router } from "express";
import { sayHello } from "./app.service";
import { logRequestTimeMiddleware } from "./app.middleware";

export const appRoutes = Router();

appRoutes.use(logRequestTimeMiddleware);

appRoutes.get("/", (req, res) => {
  res.send(sayHello());
});
