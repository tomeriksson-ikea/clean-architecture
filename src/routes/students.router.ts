import { Router } from "express";
import { StudentController } from "../controllers";

export const setupStudentsRouter = (controller: StudentController): Router => {
  const router = Router();

  router.get("/:id", controller.getStudent);
  router.post("/", controller.addStudent);

  return router;
};
