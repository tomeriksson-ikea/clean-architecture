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

  public enrollStudentInClass: RequestHandler = async (req, res, next) => {
    try {
      const classCode = req.params.code;
      const studentId = req.body.id;

      const classEnrollment = await this.interactor.enrollStudentInClass(
        classCode,
        studentId,
      );

      res.status(200).json(classEnrollment);
    } catch (e) {
      next(e);
    }
  };
}
