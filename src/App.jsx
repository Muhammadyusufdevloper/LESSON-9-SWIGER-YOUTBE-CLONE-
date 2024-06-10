import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Admin from "./pages/admin"
import Home from "./pages/home"
import { useState } from "react"
const App = () => {
  const [search, setSearch] = useState("")
  const [menu, setMenu] = useState(true)
  return (
    <>
      <Header setMenu={setMenu} setSearch={setSearch} search={search} />
      <Routes>
        <Route path="/" element={<Admin menu={menu} />}>
          <Route index element={<Home search={search} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App