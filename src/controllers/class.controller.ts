import { RequestHandler } from "express";
import { IClassInteractor } from "../interactors/Class.interactor.interface";

export class ClassController {
  private readonly interactor: IClassInteractor;

  constructor(interactor: IClassInteractor) {
    this.interactor = interactor;
  }

  public addClass: RequestHandler = async (req, res, next) => {
    try {
      const classData = req.body;

      const createdClass = await this.interactor.addClass(classData);

      res.status(201).json(createdClass);
    } catch (e) {
      next(e);
    }
  };
}
