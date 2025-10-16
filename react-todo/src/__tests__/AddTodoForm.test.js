
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";
import { useTodoStore } from "../store/TodoStore";
import { vi, test, expect } from "vitest";

// Mock the store
vi.mock("../store/TodoStore", () => ({
  useTodoStore: vi.fn(),
}));

test("renders input field", () => {
  const addTodoMock = vi.fn();
  useTodoStore.mockImplementation((selector) => selector({ addTodo: addTodoMock }));

  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText("Enter a task");
  expect(input).toBeInTheDocument();
});

test("adds a new todo", () => {
  const addTodoMock = vi.fn();
  useTodoStore.mockImplementation((selector) => selector({ addTodo: addTodoMock }));

  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText("Enter a task");
  const button = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(addTodoMock).toHaveBeenCalled();
  expect(addTodoMock.mock.calls[0][0].task).toBe("New Task");
});
