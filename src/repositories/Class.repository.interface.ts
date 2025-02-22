import { IClass } from "../interfaces/class";

export interface IClassRepository {
  addClass(_class: IClass): Promise<IClass>;
}
