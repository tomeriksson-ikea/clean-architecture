import { IClass } from "../entities/Class/Class.interface";

export interface IClassInteractor {
  addClass(_class: unknown): Promise<IClass>;
  enrollStudentInClass(classCode: string, studentId: string): Promise<IClass>;
}
