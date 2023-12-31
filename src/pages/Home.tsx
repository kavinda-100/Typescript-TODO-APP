import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import InputCard from "../components/InputCard";

const Home = () => {
  const navigate = useNavigate();

  const { todos, addTodo, removeTodo, updateCompleted } =
    useContext(TodoContext) || {};
  const [title, setTitle] = useState<string>("");

  const navigateToUpdate = (id: string) => {
    navigate(`/update/${id}`);
  };

  return (
    <section className="w-full flex flex-col justify-between gap-3 my-4 bg-white-secondary">
      <InputCard
        TodoTitle="Add Todo"
        buttonText="Add Todo"
        setTitle={setTitle}
        handleFunction={() => addTodo && addTodo(title)}
      />

      <div>
        <h1 className="text-center text-2xl font-semibold">Todo List</h1>
        <div className="flex flex-col gap-3">
          {todos &&
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center bg-white-primary hover:bg-yellow-50 p-5 shadow-lg rounded-lg my-2 w-full"
              >
                <div className="flex flex-col lg:flex-row justify-between items-center w-3/5 gap-2">
                  <h1 className="flex flex-col text-black font-semibold text-wrap">
                    {todo.title}
                    {todo.completed && (
                      <span className="text-green-400 font-bold text-lg">
                        completed
                      </span>
                    )}
                  </h1>
                  <h1 className="text-xl font-semibold text-gray-600">
                    {todo.date}
                  </h1>
                </div>
                <div className="flex gap-3 w-2/5">
                  <input
                    checked={todo.completed}
                    onChange={() => updateCompleted && updateCompleted(todo.id)}
                    className="mx-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="checkbox"
                  />
                  <button
                    className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                    onClick={() => navigateToUpdate(todo.id)}
                  >
                    Update
                  </button>
                  <button
                    className="w-full p-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
                    onClick={() => removeTodo && removeTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        {!todos ||
          (todos.length === 0 && (
            <h1 className="text-xl text-gray-500 font-semibold text-center my-5">
              TODO List Is Empty
            </h1>
          ))}
      </div>
    </section>
  );
};

export default Home;
