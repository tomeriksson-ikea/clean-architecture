import { IClass } from "./Class.interface";
import { validClassCodeRegex } from "../../utils/regex";
import { BadUserInputError } from "../../utils/errors";

export class Class implements IClass {
  readonly code: string;
  description: string;
  name: string;

  constructor(
    code: string | undefined,
    description: string | undefined,
    name: string | undefined,
  ) {
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

    this.code = code;
    this.description = description;
    this.name = name;
  }
}
