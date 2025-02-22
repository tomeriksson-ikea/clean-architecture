import express, { Router } from "express";
import { StudentController } from "./controllers";
import { StudentInteractor } from "./interactors";
import { StudentRepository } from "./repositories";
import { errorHandlerMiddleware } from "./middlewares";

const studentRepository = new StudentRepository();
const studentInteractor = new StudentInteractor(studentRepository);
const studentController = new StudentController(studentInteractor);

const app = express();

const port = 3000;

app.use(express.json());

const studentRouter = Router();

studentRouter.get("/:id", studentController.getStudent);
studentRouter.post("/", studentController.addStudent);

app.use("/students", studentRouter);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
