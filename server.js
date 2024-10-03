const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const Task = require('./models/Task');

// Use CORS middleware (Allow all origins)
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
  if (mongoose.connection.readyState === 0) { // 0 = disconnected
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoDB');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  } else {
    console.log('Already connected to MongoDB');
  }
}

let server; // Declare a variable to store the server instance

// Start the server
const startServer = () => {
  server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Function to stop the server
const stopServer = () => {
  if (server) {
    server.close();
  }
};

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

// Export app for testing
module.exports = { app, startServer, stopServer };
