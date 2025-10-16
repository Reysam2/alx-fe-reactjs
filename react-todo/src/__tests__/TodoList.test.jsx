import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import { useTodoStore } from "../store/TodoStore";
import { vi, test, expect } from "vitest";

vi.mock("../store/TodoStore", () => ({
  useTodoStore: vi.fn(),
}));

test("renders TodoList and handles toggle & delete", () => {
  const removeTodoMock = vi.fn();
  const toggleCompleteMock = vi.fn();

  useTodoStore.mockReturnValue({
    todos: [{ id: 1, task: "Test Todo", completed: false }],
    removeTodo: removeTodoMock,
    toggleComplete: toggleCompleteMock,
  });

  render(<TodoList />);

  // Check todo is rendered
  expect(screen.getByText("Test Todo")).toBeInTheDocument();

  // Toggle button (flexible matcher for text)
  const toggleButton = screen.getByText((text) => text.includes("Complete"));
  fireEvent.click(toggleButton);
  expect(toggleCompleteMock).toHaveBeenCalledWith(1);

  // Delete button
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);
  expect(removeTodoMock).toHaveBeenCalledWith(1);
});
