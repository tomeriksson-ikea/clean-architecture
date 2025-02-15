"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    interactor;
    constructor(interactor) {
        this.interactor = interactor;
    }
    async getStudent(req, res, next) {
        try {
            const id = req.params.id;
            const student = await this.interactor.getStudent(id);
            if (student) {
                res.status(200).send(student);
            }
            else {
                res.status(404).send("Student not found");
            }
        }
        catch (e) {
            next(e);
        }
    }
}
exports.StudentController = StudentController;
