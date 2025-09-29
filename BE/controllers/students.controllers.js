import Student from "../models/student.js";

export const createStudent = async (req, res) => {
    const { first_name, last_name, age } = req.body;

    try {
        const student = new Student({ first_name, last_name, age });
        await student.save();
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

export const getAllStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

export const getStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id);
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

export const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;

    try {
        const student = await Student.findByIdAndUpdate(id, { first_name, last_name, age }, { new: true });
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

export const deleteStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findByIdAndDelete(id);
        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
