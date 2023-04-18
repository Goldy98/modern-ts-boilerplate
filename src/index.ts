import { appRoutes } from "./app/app.controller";

const express = require("express");
const app = express();

const port = 3000;

app.use("/", appRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
