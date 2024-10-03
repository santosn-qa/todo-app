const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

const Task = require('./models/Task');

// Use CORS middleware (Allow all origins)
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB (make sure MongoDB is running on your machine)
mongoose.connect('mongodb://localhost:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });
  await task.save();
  res.json(task);
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = req.body.completed;
  await task.save();
  res.json(task);
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});
