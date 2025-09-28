import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/students.routes.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
// Endpoint Routes
app.use(healthRoutes)
app.use('/api', studentRoutes);

export default app;
