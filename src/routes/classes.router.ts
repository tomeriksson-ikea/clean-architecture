import { Router } from "express";
import { ClassController } from "../controllers/class.controller";

export const setupClassesRouter = (controller: ClassController): Router => {
  const classesRouter = Router();

  classesRouter.post("/", controller.addClass);
  classesRouter.put("/:code/students", controller.enrollStudentInClass);

  return classesRouter;
};
