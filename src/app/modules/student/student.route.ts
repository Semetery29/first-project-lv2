import express from "express";
import { StudentControllers } from "./student.cotroller";

const router = express.Router();

// will call controller function
router.post("/create-student", StudentControllers.createStudent);
