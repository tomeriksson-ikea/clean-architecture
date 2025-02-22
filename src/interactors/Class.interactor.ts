import { IClassInteractor } from "./Class.interactor.interface";
import { IClassRepository } from "../repositories/Class.repository.interface";
import { IClass } from "../entities/Class/Class.interface";
import { Class } from "../entities/Class/Class";

export class ClassInteractor implements IClassInteractor {
  private readonly repository: IClassRepository;

  constructor(repository: IClassRepository) {
    this.repository = repository;
  }

  async addClass(_class: any): Promise<IClass> {
    const classInstance = new Class(
      _class?.code,
      _class?.description,
      _class?.name,
    );

    await this.repository.addClass(classInstance);
    return classInstance;
  }
}
