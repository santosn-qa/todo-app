// cypress/integration/task.spec.js

import TaskPage from '../pageObjects/taskPage';

describe('Task Management', () => {
    before(() => {
        // Clear the database before all tests
        cy.request('DELETE', 'http://localhost:3000/api/clear-db');
    });

    beforeEach(() => {
        TaskPage.visit(); // Visit the application before each test
    });

    it('should add a new task to the list', () => {
        const taskName = 'New Task';

        TaskPage.addTask(taskName);
        TaskPage.getTaskList().should('contain', taskName); // Check if the task is added to the list
    });

    it('should mark a task as completed when checkbox is selected', () => {
        const taskName = 'New Task';

        TaskPage.addTask(taskName);
        TaskPage.completeTask(taskName);

        TaskPage.getTaskList()
            .find('.task-item')
            .contains(taskName)
            .should('have.class', 'completed'); // Check if the task has the 'completed' class
    });

    it('should delete a task from the list', () => {
        const taskName = 'New Task';

        TaskPage.deleteTask(taskName);
        TaskPage.getTaskList().should('not.contain', taskName); // Check if the task is removed from the list
    });
});
