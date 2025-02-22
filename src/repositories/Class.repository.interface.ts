import { IClass } from "../entities/Class/Class.interface";

export interface IClassRepository {
  addClass(_class: IClass): Promise<IClass>;
  getClass(classCode: string): Promise<IClass | undefined>;
  saveClass(_class: IClass): Promise<IClass>;
}
