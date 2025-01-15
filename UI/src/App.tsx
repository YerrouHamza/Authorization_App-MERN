import { Routes, Route } from "react-router-dom"
import HomePage from "./views/homePage"
import LoginPage from "./views/loginPage"
import RegisterPage from "./views/registerPage"

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
    </Routes>
  )
}

export default App
