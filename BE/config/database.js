import {connect} from "mongoose";
import 'dotenv/config';

// Cached idea comes from this vercel template:
// https://github.com/codebyviral/vercel-express-starter-kit/blob/main/template/src/db/connect.js

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
    try {
        if (cached.conn) {
            console.log("Using cached MongoDB connection");
            return cached.conn;
        }

        if (!cached.promise) {
            cached.promise = await connect(process.env.MONGODB_URI, {
                retryWrites: true,
                writeConcern: "majority",
                appName: process.env.MONGODB_APP_NAME,
            });
        }

        cached.conn = await cached.promise;

        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
