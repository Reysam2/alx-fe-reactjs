import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(persist((set) => ({
  // state
  todos: [], 

  // actions

  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo]
  })),

  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),


  toggleComplete: (id) => set((state) => ({
    todos: state.todos.map((todo) => 
       todo.id === id? {...todo, completed: !todo.completed } : todo
    )
  }))



}),
  { name: "todo-storage" }
)) 