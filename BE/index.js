import app from './app.js';
import { connectDB } from './config/database.js';
import 'dotenv/config';

const init = async  () => {
    await connectDB();

    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server started on port ${process.env.PORT}`);
        }
    })
}

init();
