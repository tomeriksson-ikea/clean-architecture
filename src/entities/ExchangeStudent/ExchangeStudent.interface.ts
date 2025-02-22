import { IStudent } from "../Student/Student.interface";

export interface IExchangeStudent extends IStudent {
  readonly originSchool: string;
}
