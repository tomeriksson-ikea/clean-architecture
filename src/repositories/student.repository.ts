import { MongoClient } from "mongodb";
import { IStudent, IStudentRepository } from "../interfaces";

export class StudentRepository implements IStudentRepository {
  private readonly uri = "mongodb://localhost:27017"; // Change if needed
  private readonly client: MongoClient;

  constructor() {
    this.client = new MongoClient(this.uri);
  }

  async getStudent(id: string): Promise<IStudent | undefined> {
    const doc = await this.client
      .db("school")
      .collection("students")
      .findOne({ id }, { projection: { _id: 0 } });

    return doc as IStudent | undefined;
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
