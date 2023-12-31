import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayOut from "./components/LayOut"
import Home from "./pages/Home"
import Update from "./pages/Update"

import TodoContextProvider from "./context/TodoContext"

const App = () => {
  return (
    <BrowserRouter>
    <TodoContextProvider>
      <Routes>
        <Route path="/" element={<LayOut />} >
          <Route index element={<Home />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </TodoContextProvider>
    </BrowserRouter>
  )
}

export default App
