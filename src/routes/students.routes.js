"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupStudentRoutes = void 0;
const express_1 = require("express");
const setupStudentRoutes = (studentController) => {
    const router = (0, express_1.Router)();
    router.get("/", studentController.getStudent);
    return router;
};
exports.setupStudentRoutes = setupStudentRoutes;
