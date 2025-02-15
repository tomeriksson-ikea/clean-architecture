"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
class StudentRepository {
    sqliteClient;
    constructor(sqliteClient) {
        this.sqliteClient = sqliteClient;
    }
    async getStudent(id) {
        const rows = await this.sqliteClient.query("SELECT * FROM Student where id = $1 LIMIT 1;", [id]);
        return rows[0];
    }
}
exports.StudentRepository = StudentRepository;
