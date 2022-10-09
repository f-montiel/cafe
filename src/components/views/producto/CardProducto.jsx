import { Card, Button, Col } from "react-bootstrap";

const CardProducto = () => {
    return (
        <Col md={3}>
            <Card className="mx-2 my-2">
                <Card.Img variant="top" src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                    <Card.Title>Cafe</Card.Title>
                    <Card.Text>
                        Precio: $250
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default CardProducto;
