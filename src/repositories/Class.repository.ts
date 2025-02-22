import { MongoClient } from "mongodb";
import { IClassRepository } from "./Class.repository.interface";
import { IClass } from "../entities/Class/Class.interface";

export class ClassRepository implements IClassRepository {
  private readonly uri = "mongodb://localhost:27017"; // Change if needed
  private readonly client: MongoClient;

  constructor() {
    this.client = new MongoClient(this.uri);
  }

  async addClass(_class: IClass): Promise<IClass> {
    const docData = structuredClone(_class);
    const result = await this.client
      .db("school")
      .collection("classes")
      .insertOne(docData);

    if (result.acknowledged) {
      return _class;
    } else {
      throw Error("Could not insert class into DB");
    }
  }
}
