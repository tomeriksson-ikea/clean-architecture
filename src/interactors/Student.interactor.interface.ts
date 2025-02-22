import { IStudent } from "../entities/Student/Student.interface";

export interface IStudentInteractor {
  getStudent(id: string): Promise<IStudent | undefined>;
  addStudent(studentData: unknown): Promise<IStudent>;
}
