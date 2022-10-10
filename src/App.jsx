import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./components/views/Inicio"
import Error404 from "./components/views/Error404"
import Administrador from "./components/views/Administrador"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./app.css"
import DetalleProducto from './components/views/producto/DetalleProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import CrearProducto from './components/views/producto/CrearProducto';
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        {/* las rutas son el nombre del dominio + path */}
        <Route exact path='/' element={<Inicio></Inicio>}/>
        <Route exact path='/detalleProducto/:id' element={<DetalleProducto></DetalleProducto>}/>
        <Route exact path='/administrador' element={<Administrador></Administrador>}/>
        <Route exact path='/crearProducto' element={<CrearProducto></CrearProducto>}></Route>
        <Route exact path='/editarProducto/:id' element={<EditarProducto></EditarProducto>}></Route>
        <Route path='*' element={<Error404></Error404>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
