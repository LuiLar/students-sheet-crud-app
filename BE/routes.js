import { Router } from 'express';
import Student from './models/student.js';

const router = Router();

router.post('/student', async (req, res) => {
    const { first_name, last_name, age } = req.body;

    try {
        const student = new Student({ first_name, last_name, age });
        await student.save();
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.get('/students', async (req, res) => {
    try{
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.get('/student/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id);
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.put('/student/:id', async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;

    try {
        const student = await Student.findByIdAndUpdate(id, { first_name, last_name, age }, { new: true });
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.delete('/student/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findByIdAndDelete(id);
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

export default router;

