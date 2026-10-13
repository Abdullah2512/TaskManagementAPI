import AppDataSource from '../database/data-source.js';

const taskRepo = () => AppDataSource.getRepository('Task');

const TaskRepository = {
    create: async (taskData) => {
        const task = taskRepo().create(taskData);
        return await taskRepo().save(task);
    },

    findAll: async () => {
        return await taskRepo().find();
    },

    updateStatus: async (id, status) => {
        const task = await taskRepo().findOneBy({
            id: Number(id)
        });

        if (!task) {
            return null;
        }

        task.status = status;
        return await taskRepo().save(task);
    }
};

export default TaskRepository;