import { IStudentInteractor, IStudentRepository } from "../interfaces";
import { Student } from "../entities/Student";

export class StudentInteractor implements IStudentInteractor {
  private readonly repository: IStudentRepository;

  constructor(repository: IStudentRepository) {
    this.repository = repository;
  }

  getStudent(id: string): Promise<Student | undefined> {
    return this.repository.getStudent(id);
  }
}
