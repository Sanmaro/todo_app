import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  const handleAddTask = (task) => {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then(response => response.json())
      .then(addedTask => {
        setTasks([...tasks, addedTask]);
      })
      .catch(error => console.error("Error adding task:", error));
  };

  const handleDeleteTask = (index) => {
    fetch(`/api/tasks/${index}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks(tasks.filter((_, i) => i !== index));
      })
      .catch(error => console.error("Error deleting task:", error));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleEditChange = (text) => {
    setEditText(text);
  };

  const saveEdit = (index) => {
    fetch(`/api/tasks/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: editText }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      })
      .catch(error => console.error("Error updating task:", error));
  };

  return (
    <div className="App">
      <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
      <AddTodo onAdd={handleAddTask} />
      <TodoList tasks={tasks} onDelete={handleDeleteTask} onEdit={startEditing} onChangeEdit={handleEditChange} onSaveEdit={saveEdit} editIndex={editIndex} editText={editText} />
    </div>
  );
}

export default App;
