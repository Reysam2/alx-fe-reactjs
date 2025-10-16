import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../component/TodoList";
import AddTodoForm from "../component/AddTodoForm";
import { useTodoStore } from "../store/TodoStore";
import { vi, test, expect, beforeEach } from "vitest";

// Mock the store
vi.mock("../store/TodoStore", () => ({
  useTodoStore: vi.fn(),
}));

let removeTodoMock;
let toggleCompleteMock;

beforeEach(() => {
  removeTodoMock = vi.fn();
  toggleCompleteMock = vi.fn();

  useTodoStore.mockReturnValue({
    todos: [
      { id: 1, task: "Test Todo 1", completed: false },
      { id: 2, task: "Test Todo 2", completed: true },
    ],
    removeTodo: removeTodoMock,
    toggleComplete: toggleCompleteMock,
  });
});

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
  expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const toggleButtons = screen.getAllByText((text) =>
    text.includes("Complete")
  );
  fireEvent.click(toggleButtons[0]); // click first todo's button
  expect(toggleCompleteMock).toHaveBeenCalledWith(1);
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0]; // first todo
  fireEvent.click(deleteButton);
  expect(removeTodoMock).toHaveBeenCalledWith(1);
});


// Mock the store
vi.mock("../store/TodoStore", () => ({
  useTodoStore: vi.fn(),
}));

test("renders input field", () => {
  const addTodoMock = vi.fn();
  useTodoStore.mockImplementation((selector) =>
    selector({ addTodo: addTodoMock })
  );

  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText("Enter a task");
  expect(input).toBeInTheDocument();
});

test("adds a new todo", () => {
  const addTodoMock = vi.fn();
  useTodoStore.mockImplementation((selector) =>
    selector({ addTodo: addTodoMock })
  );

  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText("Enter a task");
  const button = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(addTodoMock).toHaveBeenCalled();
  expect(addTodoMock.mock.calls[0][0].task).toBe("New Task");
});
