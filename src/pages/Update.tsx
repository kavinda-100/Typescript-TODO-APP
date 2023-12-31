import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useContext } from "react"
import { TodoContext, Todo } from "../context/TodoContext"
import InputCard from "../components/InputCard"

const Update = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { todos, updateTodo } = useContext(TodoContext) || {}

  const [updateTitle, setUpdateTitle] = useState<string>("")

  if (!todos) return <h1 className="text-xl text-gray-500 font-semibold">TODO Not Found</h1>

  const todo: Todo | undefined = todos.find((todo: { id: string }) => todo.id === id)

  const handleUpdate = (id: string | undefined, title: string) => {
    if(!id || !title || id == undefined) {
      alert('Please fill all the fields')
      return
    }
    else{
      updateTodo && updateTodo (id, title)
      navigate('/')
    }
  }

  return (
    <section className="w-full flex flex-col justify-between gap-3 bg-white-primary hover:bg-yellow-50 my-4">
      {
        todo &&
        <div className="flex gap-4 justify-center items-center bg-white-primary p-5 shadow-lg rounded-lg w-full">
          <h1 className="text-center text-gray-500 font-semibold w-1/6">Current TODO :</h1>
          <h1 className="text-black font-semibold text-wrap w-4/6">{todo.title}</h1>
          <h1 className={` font-semibold w-1/6 ${todo.completed ? ` text-green-400`: `text-red-400`}`}>{todo.completed ? "completed" : "Not completed"}</h1>
        </div>
      }
      <InputCard
        TodoTitle="Update Todo"
        buttonText="Update"
        setTitle={setUpdateTitle}
        handleFunction={() => handleUpdate(todo?.id, updateTitle)}
        />

        <div className="flex flex-col gap-3 justify-between">
          {
            !todo && <h1 className="text-xl text-gray-500 font-semibold">TODO Not Found</h1>
          }
          <Link to="/" className="text-white font-semibold bg-sky-600 p-3 rounded w-1/4 text-center">Go Back</Link>
        </div>
    </section>
  )
}

export default Update
