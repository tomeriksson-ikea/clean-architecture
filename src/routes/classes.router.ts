import { Router } from "express";
import { ClassController } from "../controllers/class.controller";
import { ClassInteractor } from "../interactors/Class.interactor";
import { ClassRepository } from "../repositories/Class.repository";
import { StudentRepository } from "../repositories/Student.repository";

export const setupClassesRouter = (): Router => {
  const classesRouter = Router();

  const classRepository = new ClassRepository();
  const studentRepository = new StudentRepository();
  const classInteractor = new ClassInteractor(
    classRepository,
    studentRepository,
  );
  const classController = new ClassController(classInteractor);

  classesRouter.post("/", classController.addClass);
  classesRouter.put("/:code/students", classController.enrollStudentInClass);

  return classesRouter;
};
