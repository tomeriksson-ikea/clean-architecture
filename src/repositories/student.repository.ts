import { MongoClient } from "mongodb";
import { IStudentRepository } from "../interfaces";
import { Student } from "../entities/Student";

export class StudentRepository implements IStudentRepository {
  private readonly uri = "mongodb://localhost:27017"; // Change if needed
  private readonly client: MongoClient;

  constructor() {
    console.log("hello");
    this.client = new MongoClient(this.uri);
  }

  async getStudent(id: string): Promise<Student | undefined> {
    const doc = await this.client
      .db("School")
      .collection("students")
      .findOne({}, { projection: { _id: 0 } });

    return doc as Student | undefined;
  }
}
