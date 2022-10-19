import { consultarUsuarios } from "./components/helpers/queries";
import { Button } from "react-bootstrap";

const CerrarSesion = ({consultarUsuarioLogueado})=>{
    const borrarSesion = ()=>{
        sessionStorage.removeItem("usuario");
        consultarUsuarioLogueado();
    }
    return(
        <Button variant='none' className={"nav-item nav-link"} onClick={borrarSesion}>Cerrar Sesion</Button>
    );
}

export default CerrarSesion;