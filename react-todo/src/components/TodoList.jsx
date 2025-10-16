// import { useState } from "react";
import { useTodoStore } from "../store/TodoStore";

function TodoList() {
  const { todos, removeTodo ,toggleComplete} = useTodoStore();
   
  // const [getTodoId, setGetTodoId] = useState(null);

  const handleDelete = (id) => {
    removeTodo(id);
  };


  return (
    <div className="w-full h-full flex justify-center  bg-amber-600  ">
      <div className="   overflow-y min-h-screen mt-[10rem] px-1  gird place-items-center place-content-start   sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:grid max-sm:grid-cols-1 gap-x-15 max-sm:flex-col ">
        {/* card */}

        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-col justify-around sm:flex sm:justify-around h-[14rem] border bg-amber-100 mb-6 rounded-xl hover:bg-amber-200 hover:shadow-xl hover:drop-shadow-2xl  transition-all duration-200 ease-in-out text-amber-900 px-5"
            >
              {/* todo text */}
              <div className="w-full  ">
                <p>{todo.task}</p>
              </div>
              {/* btns */}
              <div className=" flex justify-around gap-x-3">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`border rounded-xl py-[1.5%] px-5 cursor-pointer hover:bg-amber-900 hover:text-amber-200 ${todo.completed? "bg-amber-900 text-amber-200" : "   text-amber-900" }`}
                >
                  {!todo.completed ? " Mark Complete" : " Completed"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="border rounded-xl  py-[1.5%] px-5 cursor-pointer hover:bg-amber-900 hover:text-amber-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
