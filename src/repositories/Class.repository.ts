import { MongoClient } from "mongodb";
import { IClassRepository } from "./Class.repository.interface";
import { IClass } from "../entities/Class/Class.interface";
import { NotFoundError } from "../utils/errors/NotFoundError";
import { Class } from "../entities/Class/Class";

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

  async getClass(classCode: string): Promise<IClass> {
    const doc = await this.client
      .db("school")
      .collection("classes")
      .findOne({ code: classCode }, { projection: { _id: 0 } });
    if (doc) {
      return Class.deserialize(doc);
    } else {
      throw new NotFoundError(`Class with code ${classCode} not found`);
    }
  }

  async saveClass(_class: IClass): Promise<IClass> {
    const docData = structuredClone(_class);
    const doc = await this.client
      .db("school")
      .collection("classes")
      .replaceOne({ code: _class.code }, docData);

    if (doc.acknowledged) {
      return docData;
    } else {
      throw Error(`Could not replace class with code ${_class.code}`);
    }
  }
}
