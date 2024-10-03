# Task Manager Application

This is a simple **Task Manager** application built using Node.js, Express, MongoDB, and plain HTML/CSS/JavaScript for the frontend. The app allows users to create, update, and delete tasks.

## Features

- View all tasks
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks

## Project Structure

```bash
├── models/
│   └── Task.js             # Mongoose schema/model for Task
├── public/
│   └── index.html          # Frontend HTML
│   └── styles.css          # Frontend styling
│   └── app.js              # Frontend JavaScript
├── server.js               # Express server with API routes
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Database**: MongoDB
  
## Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v14 or later)
- MongoDB (Make sure it's running locally on `localhost`)
- Git (for version control)

## Setup Instructions
1. Clone the repository:
   ```bash
    git clone https://github.com/username/repository.git
    cd repository
   ```
1. Install the dependencies:
   ```bash
    npm install
   ```
1. Start MongoDB:
2. Run the server:
   ```bash
   npm start
   ```
   The server will be running on http://localhost:3000.
3. Open the Frontend (index.html). 
   > *You can open it with a live server (e.g., VSCode Live Server extension) or by manually navigating to it in your browser.*

## API Endpoints
- **GET** `/api/tasks`: Fetch all tasks
- **POST** `/api/tasks`: Create a new task
Request body: { "title": "Task title" }
- **PUT** `/api/tasks/:id`: Update task (mark complete/incomplete)
Request body: { "completed": true/false }
- **DELETE** `/api/tasks/:id`: Delete a task

## Example Usage
1. **Viewing Tasks**: When you load the app, a list of tasks will be fetched and displayed.
2. **Adding a Task**: Type a task title in the input box and click the "Add Task" button to add it
3. **Completing a Task**: Mark tasks as complete/incomplete using the checkbox.
4. **Deleting a Task**: Click the "Delete" button next to a task to remove it.

## License
This project is open-source and available under the MIT License.

## Author

**Nourilee Santos**

- GitHub: [https://github.com/nourilee](https://github.com/nourilee)
- LinkedIn: [https://linkedin.com/in/nourileesantos](https://linkedin.com/in/nourileesantos)

> *This `README.md` provides a clear structure for this project and gives a good starting point for anyone who clones it.*