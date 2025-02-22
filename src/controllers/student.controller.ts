import { RequestHandler } from "express";
import { IStudentInteractor } from "../interactors/Student.interactor.interface";

export class StudentController {
  private readonly interactor: IStudentInteractor;

  constructor(interactor: IStudentInteractor) {
    this.interactor = interactor;
  }

  public getStudent: RequestHandler = async (req, res, next) => {
    try {
      const id = req.params.id;

      const student = await this.interactor.getStudent(id);

      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).send("Student not found");
      }
    } catch (e) {
      next(e);
    }
  };

  public addStudent: RequestHandler = async (req, res, next) => {
    try {
      const studentData = req.body;

      const student = await this.interactor.addStudent(studentData);

      res.status(201).json(student);
    } catch (e) {
      next(e);
    }
  };
}
