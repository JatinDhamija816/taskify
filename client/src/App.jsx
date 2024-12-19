import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"

const App = () => {
  return (
    <div className='h-screen bg-gray-100' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes></div>
  )
}

export default App