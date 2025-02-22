import { Student } from "../entities";
import { BuilderError } from "../utils/errors";

export class StudentBuilder {
  private id: string | undefined;
  private name: string | undefined;
  private email: string | undefined;

  generateId(): this {
    this.id = crypto.randomUUID();
    return this;
  }

  getId(): string | undefined {
    return this.id;
  }

  setName(name: string | undefined): this {
    this.name = name;
    return this;
  }

  getName(): string | undefined {
    return this.name;
  }

  setEmail(email: string | undefined): this {
    this.email = email;
    return this;
  }

  getEmail(): string | undefined {
    return this.email;
  }

  buildStudent(): Student {
    try {
      return new Student(this);
    } catch (e) {
      throw new BuilderError(
        `Could not build student due to: ${(e as Error).message}`,
      );
    }
  }
}
