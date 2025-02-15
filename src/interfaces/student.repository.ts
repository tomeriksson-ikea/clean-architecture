import { Student } from "../entities/Student";

export interface IStudentRepository {
  getStudent(id: string): Promise<Student | undefined>;
}
