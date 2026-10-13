import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const router = Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.put('/:id/status', TaskController.updateTaskStatus);

export default router;
