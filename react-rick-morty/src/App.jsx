import Character from "./pages/Character"
import Error from "./pages/Error"
import Home from "./pages/Home"
import {Route, Routes, Link} from "react-router-dom"
function App() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>// el routes reemplaza al Switch
        <Route path="/" element={<Home/>} ></Route> // el component pasa a ser element  y ya no hace falta usar exact
        <Route path="/character/:id" element={<Character/>} ></Route> // el component pasa a ser element
        <Route path="*" element={<Error/>} ></Route> // si le ponemos * en el path, va a cumplirse cuando no matchee ninguna ruta
      </Routes>
    </div>
  )
}

export default App
