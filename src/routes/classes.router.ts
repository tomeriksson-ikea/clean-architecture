import { Router } from "express";
import { ClassController } from "../controllers/class.controller";
import { ClassInteractor } from "../interactors/Class.interactor";
import { ClassRepository } from "../repositories/Class.repository";

export const setupClassesRouter = (): Router => {
  const router = Router();

  const classRepository = new ClassRepository();
  const classInteractor = new ClassInteractor(classRepository);
  const classController = new ClassController(classInteractor);

  router.post("/", classController.addClass);

  return router;
};
