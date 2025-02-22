import { Router } from "express";
import { StudentController } from "../controllers";
import { StudentRepository } from "../repositories/Student.repository";
import { StudentInteractor } from "../interactors/Student.interactor";

export const setupStudentsRouter = (): Router => {
  const router = Router();

  const studentRepository = new StudentRepository();
  const studentInteractor = new StudentInteractor(studentRepository);
  const studentController = new StudentController(studentInteractor);

  router.get("/:id", studentController.getStudent);
  router.post("/", studentController.addStudent);

  return router;
};
