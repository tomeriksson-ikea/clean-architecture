import { IStudent } from "./student";

export interface IStudentRepository {
  getStudent(id: string): Promise<IStudent | undefined>;
  addStudent(student: IStudent): Promise<IStudent>;
}
