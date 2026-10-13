import CreateTask from '../../application/usecases/CreateTask.js';
import GetTasks from '../../application/usecases/GetTasks.js';
import UpdateTaskStatus from '../../application/usecases/UpdateTaskStatus.js';

const TaskController = {
    createTask: async (req, res, next) => {
        try {
            const task = await CreateTask.execute(req.body);
            res.status(201).json({
                success: true,
                message: 'Task created successfully',
                data: task
            });
        } catch (error) {
            if (error.message === 'Task title is required') {
                return res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            next(error);
        }
    },

    getTasks: async (req, res, next) => {
        try {
            const tasks = await GetTasks.execute();
            res.status(200).json({
                success: true,
                data: tasks
            });
        } catch (error) {
            next(error);
        }
    },

    updateTaskStatus: async (req, res, next) => {
        try {
            const task = await UpdateTaskStatus.execute(req.params.id);

            if (!task) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Task marked as Completed',
                data: task
            });
        } catch (error) {
            next(error);
        }
    }
};

export default TaskController;