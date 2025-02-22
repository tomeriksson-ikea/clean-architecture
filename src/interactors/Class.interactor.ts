import { IClassInteractor } from "./Class.interactor.interface";
import { IClassRepository } from "../repositories/Class.repository.interface";
import { IClass } from "../entities/Class/Class.interface";
import { Class } from "../entities/Class/Class";
import { NotFoundError } from "../utils/errors/NotFoundError";
import { IStudentRepository } from "../repositories/Student.repository.interface";

export class ClassInteractor implements IClassInteractor {
  private readonly classRepository: IClassRepository;
  private readonly studentRepository: IStudentRepository;

  constructor(
    classRepository: IClassRepository,
    studentRepository: IStudentRepository,
  ) {
    this.classRepository = classRepository;
    this.studentRepository = studentRepository;
  }

  async addClass(_class: any): Promise<IClass> {
    const classInstance = Class.create(
      _class?.code,
      _class?.description,
      _class?.name,
    );

    await this.classRepository.addClass(classInstance);
    return classInstance;
  }

  async enrollStudentInClass(
    classCode: string,
    studentId: string,
  ): Promise<IClass> {
    const _class = await this.classRepository.getClass(classCode);
    if (!_class) {
      throw new NotFoundError(`Class with code ${classCode} was not found`);
    }
    const student = await this.studentRepository.getStudent(studentId);

    _class.enrollStudent(student);

    return this.classRepository.saveClass(_class);
  }
}
