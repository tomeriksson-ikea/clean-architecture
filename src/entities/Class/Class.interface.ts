import { IStudent } from "../Student/Student.interface";

export interface IClass {
  code: string;
  name: string;
  description: string;
  enrollStudent(student: IStudent): void;
}
