import { IStudent } from "./student";

export interface IStudentInteractor {
  getStudent(id: string): Promise<IStudent | undefined>;
}
