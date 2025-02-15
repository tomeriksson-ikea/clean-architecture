import { Router } from "express";
import { StudentController } from "../controllers";

export const setupStudentRoutes = (
  studentController: StudentController,
): Router => {
  const router = Router();

  router.get("/", studentController.getStudent);

  return router;
};
