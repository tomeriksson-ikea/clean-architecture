import express from "express";
import { setupClassesRouter, setupStudentsRouter } from "./routes";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";

const app = express();

const port = 3000;

app.use(express.json());

const studentsRouter = setupStudentsRouter();
const classesRouter = setupClassesRouter();

app.use("/students", studentsRouter);
app.use("/classes", classesRouter);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
