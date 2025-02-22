import { IStudent } from "./student";

export interface IExchangeStudent extends IStudent {
  readonly originSchool: string;
}
