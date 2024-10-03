// cypress/pageObjects/taskPage.js

class TaskPage {
    visit() {
        cy.visit('/');
    }

    addTask(taskName) {
        cy.get('#task-input').type(taskName);
        cy.get('#add-task-btn').click();
    }

    getTaskList() {
        cy.reload() // Reload the page to ensure the latest state is loaded
        return cy.get('#task-list');
    }

    completeTask(taskName) {
        this.getTaskList()
            .find('.task-item')
            .contains(taskName)
            .siblings('input[type="checkbox"]')
            .check();
    }

    deleteTask(taskName) {
        this.getTaskList()
            .find('.task-item')
            .contains(taskName)
            .siblings('.delete-btn')
            .should('exist')
            .click();
    }
}

export default new TaskPage();
