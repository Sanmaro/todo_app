import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import AddTodo from "./AddTodo";

describe("AddTodo Component", () => {
  test("calls onAdd with the input text when form is submitted", async () => {
    const handleAdd = jest.fn();
    render(<AddTodo onAdd={handleAdd} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
    const addButton = screen.getByRole("button", { name: /add/i });

    await act(async () => {
      userEvent.type(inputElement, "Test Task");
      userEvent.click(addButton);
    });

    expect(handleAdd).toHaveBeenCalledWith("Test Task");

  });

  test("does not call onAdd when the input is empty and form is submitted", async () => {
    const handleAdd = jest.fn();
    render(<AddTodo onAdd={handleAdd} />);

    const addButton = screen.getByRole("button", { name: /add/i });

    await act(async () => {
      userEvent.click(addButton);
    });

    expect(handleAdd).not.toHaveBeenCalled();
  });
});
