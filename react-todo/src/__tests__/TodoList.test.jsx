import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
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
  const toggleButtons = screen.getAllByText((text) => text.includes("Complete"));
  fireEvent.click(toggleButtons[0]); // click first todo's button
  expect(toggleCompleteMock).toHaveBeenCalledWith(1);
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0]; // first todo
  fireEvent.click(deleteButton);
  expect(removeTodoMock).toHaveBeenCalledWith(1);
});
