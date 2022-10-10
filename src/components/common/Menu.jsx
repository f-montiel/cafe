import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <header>
            <Navbar bg="danger" variant="dark" expand="lg" className="py-4">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={"nav-item nav-link"}>
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/administrador"
                                className={"nav-item nav-link"}
                            >
                                Administrador
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Menu;
