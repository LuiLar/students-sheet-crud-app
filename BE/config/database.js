import { connect } from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
