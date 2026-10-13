import TaskRepository from '../../infrastructure/repositories/TaskRepository.js';

class UpdateTaskStatus {
    async execute(id) {
        return await TaskRepository.updateStatus(id, 'Completed');
    }
}

export default new UpdateTaskStatus();
