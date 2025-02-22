import express from "express";
import { setupClassesRouter, setupStudentsRouter } from "./routes";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { ClassRepository } from "./repositories/Class.repository";
import { StudentRepository } from "./repositories/Student.repository";
import { ClassInteractor } from "./interactors/Class.interactor";
import { ClassController } from "./controllers/class.controller";
import { StudentInteractor } from "./interactors/Student.interactor";
import { StudentController } from "./controllers";
import { MongoClient } from "mongodb";

const mongodbConnectionString = "mongodb://localhost:27017";
const mongodbClient = new MongoClient(mongodbConnectionString);

const classRepository = new ClassRepository(mongodbClient);
const studentRepository = new StudentRepository(mongodbClient);

const classInteractor = new ClassInteractor(classRepository, studentRepository);
const studentInteractor = new StudentInteractor(studentRepository);

const classController = new ClassController(classInteractor);
const studentController = new StudentController(studentInteractor);

const studentsRouter = setupStudentsRouter(studentController);
const classesRouter = setupClassesRouter(classController);

const app = express();
const port = 3000;
app.use(express.json());

app.use("/students", studentsRouter);
app.use("/classes", classesRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
