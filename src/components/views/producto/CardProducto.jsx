import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CardProducto = ({producto}) => {
    return (
        <Col md={3}>
            <Card className="mx-2 my-2">
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombreProducto}</Card.Title>
                    <Card.Text>
                        Precio: ${producto.precio}
                    </Card.Text>
                    <NavLink to={`/detalleProducto/${producto._id}`} className={"btn btn-primary"}>Ver más</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default CardProducto;
