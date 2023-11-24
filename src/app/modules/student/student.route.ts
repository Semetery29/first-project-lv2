import express from "express";
import { StudentControllers } from "./student.cotroller";

const router = express.Router();

router.post("/create-student", StudentControllers.createStudent);

router.get("/", StudentControllers.getAllStudents);

router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
