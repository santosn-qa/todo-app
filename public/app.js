const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const API_URL = 'http://localhost:3000'; // Static URL

// Fetch tasks from the API
async function fetchTasks() {
  const response = await fetch(`${API_URL}/api/tasks`);  // Updated URL
  const tasks = await response.json();
  tasks.forEach(addTaskToDOM);
}

// Add a new task
addTaskBtn.addEventListener('click', async () => {
  const title = taskInput.value;
  if (title) {
    const response = await fetch(`${API_URL}/api/tasks`, {  // Updated URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const task = await response.json();
    addTaskToDOM(task);
    taskInput.value = '';
  }
});

// Add task to the DOM
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
    <input type="checkbox" ${task.completed ? 'checked' : ''} />
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);

  // Toggle task completion
  li.querySelector('input').addEventListener('click', async () => {
    await fetch(`${API_URL}/api/tasks/${task._id}`, {  // Updated URL
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed }),
    });
    li.querySelector('span').classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', async () => {
    await fetch(`${API_URL}/api/tasks/${task._id}`, {  // Updated URL
      method: 'DELETE',
    });
    taskList.removeChild(li);
  });
}

// Initial load
fetchTasks();