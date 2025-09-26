import express from 'express';
import routes from './routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Endpoint Routes
app.use(routes);

export default app;
