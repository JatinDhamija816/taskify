import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"

const App = () => {
  return (
    <div className='h-screen bg-gray-100' >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes></div>
  )
}

export default App