import { StudentBuilder } from "../builders";
import { validEmailRegex } from "../utils/regex";

export class Student {
  private readonly id: string;
  private readonly name: string;
  private readonly email: string;

  constructor(builder: StudentBuilder) {
    const id = builder.getId();
    if (typeof id !== "string") {
      throw Error("Student id is not a string");
    }
    const name = builder.getName();
    if (typeof name !== "string") {
      throw Error("Student name is not a string");
    }
    if (name.length > 100) {
      throw Error("Student name is too long (more than 100 characters)");
    }
    const email = builder.getEmail();
    if (typeof email !== "string") {
      throw Error("Student email is not a string");
    }
    if (!email.match(validEmailRegex)) {
      throw Error("Student email does not match the expected pattern");
    }

    this.id = id;
    this.name = name;
    this.email = email;
  }
}
