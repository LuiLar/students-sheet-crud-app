import {Schema, model } from'mongoose';

const studentSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
});

export default model('Student', studentSchema);
