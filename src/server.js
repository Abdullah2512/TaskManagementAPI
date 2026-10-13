import 'dotenv/config';
import express from 'express';
import AppDataSource from './infrastructure/database/data-source.js';
import taskRoutes from './interfaces/routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

AppDataSource.initialize()
    .then(() => {
        console.log('Neon PostgreSQL connected');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });