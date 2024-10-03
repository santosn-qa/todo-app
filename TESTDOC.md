## Overview
This documentation outlines the unit tests and end-to-end (E2E) tests conducted on this Todo (Task Manager) application. The tests aim to ensure the application's functionality, reliability, and performance.

This documentation is structured to highlight my testing capabilities as a QA Automation Engineer.

## Unit Tests

### Description
Unit tests are written using Jest and focus on verifying the behavior of individual components and functions within the backend server. 

### Test Structure
- **File Location**: `__tests__/task.test.js`
- **Key Features Tested**:
  - Task creation
  - Task retrieval
  - Task updating
  - Task deletion

## Cypress (E2E) Tests

### Description
Cypress tests focus on end-to-end testing, simulating user interactions with the Todo application in a browser environment.

### Test Structure
- **File Location**: `cypress/integration/task.spec.js`
- **Key Features Tested**:
  - Adding a new task
  - Marking a task as completed
  - Deleting a task
- **Page Object Pattern**: Utilizes the Page Object Model (POM) to encapsulate selectors and actions, promoting reusability.
