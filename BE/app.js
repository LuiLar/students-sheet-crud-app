import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
// Endpoint Routes
app.use(routes);

export default app;
