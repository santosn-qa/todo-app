const request = require('supertest');
const mongoose = require('mongoose');
const { app, startServer, stopServer } = require('../server');
const Task = require('../models/Task');

const TASK_API_URL = '/api/tasks';

// Set NODE_ENV to 'test' for this test file
process.env.NODE_ENV = 'test';

beforeAll(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoDB_test');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process on error
    }
});

afterAll(async () => {
    try {
        await mongoose.connection.dropDatabase(); // Clean up the test database
        await mongoose.connection.close();
        stopServer();
    } catch (error) {
        console.error('Error during cleanup:', error);
    }
});

describe('Task API', () => {
    let taskId;

    it('should create a new task', async () => {
        const response = await request(app)
            .post(TASK_API_URL)
            .send({ title: 'Test Task' });

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Test Task');
        taskId = response.body._id; // Store the created task ID for later tests
    });

    it('should retrieve tasks', async () => {
        const response = await request(app).get(TASK_API_URL);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should update a task', async () => {
        const response = await request(app)
            .put(`${TASK_API_URL}/${taskId}`)
            .send({ completed: true });

        expect(response.status).toBe(200);
        expect(response.body.completed).toBe(true);
    });

    it('should delete a task', async () => {
        const response = await request(app).delete(`${TASK_API_URL}/${taskId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Task deleted');
    });
});
