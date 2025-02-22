import { IExchangeStudent } from "./ExchangeStudent.interface";
import { Student } from "../Student/Student";
import { StudentBuilder } from "../Student/Student.builder";

export class ExchangeStudent extends Student implements IExchangeStudent {
  readonly originSchool: string;

  constructor(builder: StudentBuilder) {
    super(builder);

    const originSchool = builder.getOriginSchool();
    if (typeof originSchool !== "string") {
      throw Error("Exchange student origin school is not a string");
    }
    if (!originSchool.toLowerCase().includes("university")) {
      throw Error("Exchange student origin school must be a university");
    }
    this.originSchool = originSchool;
  }
}
