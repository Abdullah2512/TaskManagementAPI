import { EntitySchema } from 'typeorm';

const Task = new EntitySchema({
    name: 'Task',
    tableName: 'tasks',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'varchar',
            nullable: false
        },
        description: {
            type: 'text',
            nullable: true
        },
        status: {
            type: 'varchar',
            default: 'Pending'
        },
        createdAt: {
            type: 'timestamp',
            createDate: true
        }
    }
});

export default Task;