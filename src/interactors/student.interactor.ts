import {
  IStudent,
  IStudentInteractor,
  IStudentRepository,
} from "../interfaces";
import { StudentBuilder } from "../builders";

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
      .buildStudent();

    await this.repository.addStudent(student);
    return student;
  }
}
