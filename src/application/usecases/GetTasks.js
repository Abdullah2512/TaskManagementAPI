import TaskRepository from '../../infrastructure/repositories/TaskRepository.js';

class GetTasks {
    async execute() {
        return await TaskRepository.findAll();
    }
}

export default new GetTasks();
