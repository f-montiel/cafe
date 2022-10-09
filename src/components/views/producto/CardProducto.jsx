import { Card, Button, Col } from "react-bootstrap";

const CardProducto = () => {
    return (
        <Col md={4} className={"my-3"}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default CardProducto;
