import express, { Router } from "express";
import { StudentController } from "./controllers";
import { StudentInteractor } from "./interactors";
import { StudentRepository } from "./repositories";

const studentRepository = new StudentRepository();
const studentInteractor = new StudentInteractor(studentRepository);
const studentController = new StudentController(studentInteractor);

const app = express();
const port = 3000;

const studentRouter = Router();

studentRouter.get("/", studentController.getStudent);

app.use("/students", studentRouter);

app.listen(port, () => {
  console.log({ studentRepository });
  console.log(`Example app listening on port ${port}`);
});
