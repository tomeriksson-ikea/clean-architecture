import { IStudentInteractor } from "./Student.interactor.interface";
import { IStudentRepository } from "../repositories/Student.repository.interface";
import { IStudent } from "../entities/Student/Student.interface";
import { StudentBuilder } from "../entities/Student/Student.builder";

export class StudentInteractor implements IStudentInteractor {
  private readonly repository: IStudentRepository;

  constructor(repository: IStudentRepository) {
    this.repository = repository;
  }

  getStudent(id: string): Promise<IStudent | undefined> {
    return this.repository.getStudent(id);
  }

  async addStudent(studentData: any): Promise<IStudent> {
    const student = new StudentBuilder()
      .generateId()
      .setName(studentData?.name)
      .setEmail(studentData?.email)
      .setOriginSchool(studentData?.originSchool)
      .build();

    await this.repository.addStudent(student);
    return student;
  }
}
