import { Request, Response, NextFunction } from "express";
import { IStudentInteractor } from "../interfaces";

export class StudentController {
  private readonly interactor: IStudentInteractor;

  constructor(interactor: IStudentInteractor) {
    this.interactor = interactor;
  }

  async getStudent(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = req.params.id;

      const student = await this.interactor.getStudent(id);

      if (student) {
        res.status(200).send(student);
      } else {
        res.status(404).send("Student not found");
      }
    } catch (e) {
      next(e);
    }
  }
}
