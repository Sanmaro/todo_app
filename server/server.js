import express from "express";
import cors from "cors";
const app = express();


app.use(cors());
app.use(express.json());


// Initialize a list for tasks (no database)
let tasks = [];


// Show all tasks (Read)
app.get("/api/tasks", (_, result) => {
    result.json(tasks);
});


// Add a new task (Create)
app.post("/api/tasks", (request, result) => {
    const task = request.body.task;
    tasks.push(task);
    result.status(201).json(task);
  });


// Edit an existing task (Update)
app.put("/api/tasks/:id", (request, result) => {
    const taskId = parseInt(request.params.id);
    const newTaskContent = request.body.task;
  
    if (taskId >= 0 && taskId < tasks.length) {
      tasks[taskId] = newTaskContent;
      result.json(newTaskContent);
    } else {
      result.status(404).send("Task not found");
    }
  });


// Remove an existing task (Delete)
app.delete('/api/tasks/:id', (request, result) => {
    const taskId = parseInt(request.params.id);

    if (taskId >= 0 && taskId < tasks.length) {
      tasks = tasks.filter((_, index) => index !== taskId);
      result.status(204).send();
    } else {
      result.status(404).send("Task not found");
    }
  });

  export default app;

