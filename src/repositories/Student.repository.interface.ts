import { IStudent } from "../entities/Student/Student.interface";

export interface IStudentRepository {
  getStudent(id: string): Promise<IStudent | undefined>;
  addStudent(student: IStudent): Promise<IStudent>;
}
