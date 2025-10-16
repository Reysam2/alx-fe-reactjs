 import { render,screen } from "@testing-library/react";
 import "@testing-library/jest-dom"; 
import AddTodoForm from '../components/AddTodoForm';

 test("Render AddTodo component", () =>{
  render(<AddTodoForm />);

  expect(screen.getByPlaceholderText("Enter a task")).toBeInTheDocument()
 })