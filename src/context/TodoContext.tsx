import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type ChildProps = {
  children: React.ReactNode;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  date: string;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  updateCompleted: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoContextProvider = ({ children }: ChildProps) => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );

  // date format function
  const dateFormat = (): string => {
    // ✅ DD/MM/YYYY
    const formattedDate = new Date().toLocaleDateString("en-GB");
    return formattedDate // 👉️ 24/07/2023
  };

  // Add Todo
  const addTodo = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
      date: dateFormat(),
    };
    setTodos([...todos, newTodo]);
  };

  // Remove Todo
  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update Todo
  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  // set completed
  const updateCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const values: TodoContextType = {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
    updateCompleted,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
