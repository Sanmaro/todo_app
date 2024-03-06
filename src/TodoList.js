import React from 'react';

function TodoList({ tasks, onDelete, onEdit, onChangeEdit, onSaveEdit, editIndex, editText }) {
  return (
    <table id="todo-table" className="table table-hover rounded-3 mt-5">
      <thead>
        <tr>
          <th scope="col" className="col-1">#</th>
          <th scope="col" className="col-9 text-start">Task</th>
          <th scope="col" className="col-1">Edit</th>
          <th scope="col" className="col-1">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            {/* Number rows by the task index plus one (the header row is omitted) */}
            <th scope="row">{index + 1}</th>
            {/* When editing, the task text changes into inpur field,
            OTHERWISE the text is displayed */}
            <td className="text-start">{editIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => onChangeEdit(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSaveEdit(index)}
                />
              ) : (
                task
              )}</td>
            <td>
              {/* Showing different icons depending on the action (save/edit) */}
              {editIndex === index ? (
                <img onClick={() => onSaveEdit(index)} src={`${process.env.PUBLIC_URL}/img/save.png`} alt="Save" style={{ cursor: "pointer" }} />
                ) : (
                <img onClick={() => onEdit(index)} src={`${process.env.PUBLIC_URL}/img/edit.png`} alt="Edit" style={{ cursor: "pointer" }} />
              )}
            </td>
            <td>
              {/* On click delete the task */}
              <img onClick={() => onDelete(index)} src={`${process.env.PUBLIC_URL}/img/delete.png`} alt="Delete" style={{ cursor: "pointer" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
