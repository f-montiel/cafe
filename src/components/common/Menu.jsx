import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CerrarSesion from "../../CerrarSesion";
import Login from "../../Login";
import Registrar from "../../Registrar";

const Menu = () => {
    const [usuarioLogueado, setUsuarioLogueado] = useState(true);
    const consultarUsuarioLogueado = () => {
        let usuario = sessionStorage.getItem("usuario");
        if (usuario) {
            setUsuarioLogueado(true);
        } else {
            setUsuarioLogueado(false);
        }
    };
    const mostrarBotones = (usuarioLogueado === false)?
        (
            <>
                <Login
                    consultarUsuarioLogueado={
                        consultarUsuarioLogueado
                    }
                ></Login>
                <Registrar></Registrar>
            </>
        ):(<CerrarSesion consultarUsuarioLogueado={
            consultarUsuarioLogueado
        }></CerrarSesion>);

    useEffect(() => {
        consultarUsuarioLogueado();
    }, []);

    return (
        <header>
            <Navbar bg="danger" variant="dark" expand="lg" className="py-4">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                            <NavLink to="/" className={"nav-item nav-link"}>
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/administrador"
                                className={"nav-item nav-link"}
                            >
                                Administrador
                            </NavLink>
                            {
                                mostrarBotones
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Menu;
