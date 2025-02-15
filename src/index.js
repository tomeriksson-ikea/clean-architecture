"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const controllers_1 = require("./controllers");
const interactors_1 = require("./interactors");
const externals_1 = require("./externals");
const repositories_1 = require("./repositories");
const setup_database_1 = require("./infrastructure/setup.database");
const sqliteClient = new externals_1.SQLiteClient();
sqliteClient
    .connect("school.db")
    .then(() => (0, setup_database_1.setupDatabase)(sqliteClient))
    .then(() => {
    const studentRepository = new repositories_1.StudentRepository(sqliteClient);
    const studentInteractor = new interactors_1.StudentInteractor(studentRepository);
    const studentController = new controllers_1.StudentController(studentInteractor);
    const studentRoutes = (0, routes_1.setupStudentRoutes)(studentController);
    const app = (0, express_1.default)();
    const port = 3000;
    app.use("/students", studentRoutes);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
