import React, { useState } from 'react';

// Adding a new element to the todo list
function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  // Handle empty input field
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center m-3">
      <input
        className="px-2 rounded-2 border-1 form-control-lg w-75"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="btn btn-dark btn-lg mx-2">Add</button>
    </form>
  );
}

export default AddTodo;
