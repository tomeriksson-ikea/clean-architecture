import { IClass } from "./Class.interface";
import { validClassCodeRegex } from "../../utils/regex";
import { BadUserInputError } from "../../utils/errors";
import { IStudent } from "../Student/Student.interface";

export class Class implements IClass {
  readonly code: string;
  description: string;
  name: string;

  private readonly enrolledStudents: IStudent[];

  private constructor(
    code: string,
    description: string,
    name: string,
    enrolledStudents: IStudent[],
  ) {
    this.code = code;
    this.description = description;
    this.name = name;
    this.enrolledStudents = enrolledStudents;
  }

  static create(
    code: string | undefined,
    description: string | undefined,
    name: string | undefined,
  ): Class {
    if (typeof code !== "string") {
      throw new BadUserInputError("Class code must be a string");
    }
    if (!code.match(validClassCodeRegex)) {
      throw new BadUserInputError("Class code must be of format ABC-123");
    }
    if (typeof description !== "string") {
      throw new BadUserInputError("Class description must be a string");
    }
    if (typeof name !== "string") {
      throw new BadUserInputError("Class name must be a string");
    }

    const enrolledStudents: IStudent[] = [];

    return new Class(code, description, name, enrolledStudents);
  }

  enrollStudent(student: IStudent): void {
    this.enrolledStudents.push(student);
  }

  static deserialize(obj: any): Class {
    return new Class(obj.code, obj.name, obj.description, obj.enrolledStudents);
  }
}
