import React from "react";

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
            <th scope="row">{index + 1}</th>
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
              {editIndex === index ? (
                <img onClick={() => onSaveEdit(index)} src={`${process.env.PUBLIC_URL}/img/save.png`} alt="Save" style={{ cursor: "pointer" }} />
                ) : (
                <img onClick={() => onEdit(index)} src={`${process.env.PUBLIC_URL}/img/edit.png`} alt="Edit" style={{ cursor: "pointer" }} />
              )}
            </td>
            <td>
              <img onClick={() => onDelete(index)} src={`${process.env.PUBLIC_URL}/img/delete.png`} alt="Delete" style={{ cursor: "pointer" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
