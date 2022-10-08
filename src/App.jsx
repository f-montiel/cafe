import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./components/views/Inicio"
import Error404 from "./components/views/Error404"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* las rutas son el nombre del dominio + path */}
        <Route exact path='/' element={<Inicio></Inicio>}/>
        <Route path='*' element={<Error404></Error404>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
