import { appRoutes } from "./app/app.controller";

import express from "express";
const app = express();

const port = 3000;

app.use("/", appRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
