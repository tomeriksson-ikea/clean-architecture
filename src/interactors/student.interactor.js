"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInteractor = void 0;
class StudentInteractor {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getStudent(id) {
        return this.repository.getStudent(id);
    }
}
exports.StudentInteractor = StudentInteractor;
