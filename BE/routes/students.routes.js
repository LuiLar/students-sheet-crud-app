import { Router } from 'express';
import {
    createStudent,
    deleteStudentById,
    getAllStudents,
    getStudentById,
    updateStudentById
} from "../controllers/students.controllers.js";

const router = Router();

router.post('/student', createStudent);

router.get('/students', getAllStudents);

router.get('/student/:id', getStudentById)

router.put('/student/:id', updateStudentById);

router.delete('/student/:id', deleteStudentById);

export default router;

