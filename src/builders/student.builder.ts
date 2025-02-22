import { Student } from "../entities";
import { BuilderError } from "../utils/errors";
import { ExchangeStudent } from "../entities/ExchangeStudent";
import { IStudent } from "../interfaces";

export class StudentBuilder {
  private id: string | undefined;
  private name: string | undefined;
  private email: string | undefined;
  private originSchool: string | undefined;

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

  setOriginSchool(originSchool: string | undefined): this {
    this.originSchool = originSchool;
    return this;
  }

  getOriginSchool(): string | undefined {
    return this.originSchool;
  }

  build(): IStudent {
    try {
      if (this.originSchool) {
        return new ExchangeStudent(this);
      }
      return new Student(this);
    } catch (e) {
      throw new BuilderError(
        `Could not build student due to: ${(e as Error).message}`,
      );
    }
  }
}
