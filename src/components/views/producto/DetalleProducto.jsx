import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { consultaPorId } from "../../helpers/queries";

const DetalleProducto = ()=>{
    const [producto, setProducto] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        consultaPorId(id).then((respuesta)=>{setProducto(respuesta)});
    }, [])

    return(
        <Container className="mainSection">
            <Card className="my-5">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={producto.imagen} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{producto.nombreProducto}</Card.Title>
                            <hr />

                            <Card.Text>
                                Precio: ${producto.precio}
                            </Card.Text>
                        </Card.Body>    
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}
export default DetalleProducto;