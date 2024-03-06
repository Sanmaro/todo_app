import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add a new task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete the task
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((_, index) => index !== task));
  };

  // Show input field for editing
  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  // Process the change
  const handleEditChange = (text) => {
    setEditText(text);
  };

  // Save the new text
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
