import { MongoClient } from "mongodb";
import { IStudentRepository } from "./Student.repository.interface";
import { IStudent } from "../entities/Student/Student.interface";
import { NotFoundError } from "../utils/errors/NotFoundError";

export class StudentRepository implements IStudentRepository {
  private readonly uri = "mongodb://localhost:27017"; // Change if needed
  private readonly client: MongoClient;

  constructor() {
    this.client = new MongoClient(this.uri);
  }

  async getStudent(id: string): Promise<IStudent> {
    const doc = await this.client
      .db("school")
      .collection("students")
      .findOne({ id }, { projection: { _id: 0 } });

    if (doc) {
      return doc as unknown as IStudent;
    } else {
      throw new NotFoundError(`Student with id ${id} not found`);
    }
  }

  async addStudent(student: IStudent): Promise<IStudent> {
    const docData = structuredClone(student);
    const result = await this.client
      .db("school")
      .collection("students")
      .insertOne(docData);

    if (result.acknowledged) {
      return student;
    } else {
      throw Error("Could not insert student into DB");
    }
  }
}
