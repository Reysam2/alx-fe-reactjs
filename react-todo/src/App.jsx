import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import NavBar from "./components/NavBar";
 
 

function App() {
  return ( 
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create-todo" element={<AddTodoForm />} /> 
      </Routes>
    </Router>
   );
}

export default App;