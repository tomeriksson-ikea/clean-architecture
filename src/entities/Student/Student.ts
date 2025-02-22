import { StudentBuilder } from "./Student.builder";
import { IStudent } from "./Student.interface";
import { validEmailRegex } from "../../utils/regex";
import { BadUserInputError } from "../../utils/errors";

export class Student implements IStudent {
  readonly id: string;
  name: string;
  email: string;

  constructor(builder: StudentBuilder) {
    const id = builder.getId();
    if (typeof id !== "string") {
      throw new BadUserInputError("Student id must be a string");
    }
    const name = builder.getName();
    if (typeof name !== "string") {
      throw new BadUserInputError("Student name must be a string");
    }
    if (name.length > 100) {
      throw new BadUserInputError(
        "Student name is too long (more than 100 characters)",
      );
    }
    const email = builder.getEmail();
    if (typeof email !== "string") {
      throw new BadUserInputError("Student email must be a string");
    }
    if (!email.match(validEmailRegex)) {
      throw new BadUserInputError(
        "Student email does not match the expected pattern",
      );
    }

    this.id = id;
    this.name = name;
    this.email = email;
  }
}
