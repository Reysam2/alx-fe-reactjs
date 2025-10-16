import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import TodoList from "./component/TodoList";
import AddTodoForm from "./component/AddTodoForm";
import NavBar from "./component/NavBar";
 
 

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