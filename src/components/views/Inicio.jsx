import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        consultarAPI().then((respuesta)=>{setProductos(respuesta)});
    },[])
    return(
        <Container className="mainSection">
            <h1 className="display-2 mt-5 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                {productos.map((producto)=>{
                    return <CardProducto key={producto._id} producto={producto}></CardProducto>
                })}
            </Row>
        </Container>
    );
}
export default Inicio;