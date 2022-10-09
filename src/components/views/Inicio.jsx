import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
    return(
        <Container className="mainSection">
            <h1 className="display-2 mt-5 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
            </Row>
        </Container>
    );
}
export default Inicio;