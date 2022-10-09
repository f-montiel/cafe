import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./components/views/Inicio"
import Error404 from "./components/views/Error404"
import Administrador from "./components/views/Administrador"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        {/* las rutas son el nombre del dominio + path */}
        <Route exact path='/' element={<Inicio></Inicio>}/>
        <Route path='*' element={<Error404></Error404>}/>
        <Route exact path='/administrador' element={<Administrador></Administrador>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
