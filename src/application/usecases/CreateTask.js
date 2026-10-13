import TaskRepository from '../../infrastructure/repositories/TaskRepository.js';

class CreateTask {
    async execute(taskData) {
        if (!taskData.title || !taskData.title.trim()) {
            throw new Error('Task title is required');
        }

        return await TaskRepository.create({
            title: taskData.title.trim(),
            description: taskData.description || undefined
        });
    }
}

export default new CreateTask();