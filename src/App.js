import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((_, index) => index !== task));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleEditChange = (text) => {
    setEditText(text);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
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
