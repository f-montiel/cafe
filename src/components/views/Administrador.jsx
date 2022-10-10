import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { borrarProducto, consultarAPI } from "../helpers/queries";
import ItemProducto from "./producto/ItemProducto";

const Administrador = ()=>{
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        consultarAPI().then((listaProductos)=>{
            setProductos(listaProductos);
        });
    }, []);

    const borrar = (id)=>{
        let listaProductos = [...productos.filter((producto)=>{return producto.id !== id})]
        borrarProducto(id).then((respuesta)=>{setProductos(listaProductos);});
    }

    return(
        <Container className={"mainSection"}>
            <div className={"d-flex justify-content-between"}>
                <h1 className={"display-4 mt-5"}>Productos Disponibles</h1>
                <div className={" d-flex align-items-end mb-3"}>
                    <NavLink to={"/crearProducto"} className={"btn btn-primary"}>Agregar</NavLink>
                </div>
            </div>
            <hr />
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>URL Imagen</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto)=>{return <ItemProducto producto={producto} borrar={borrar} key={producto.id}></ItemProducto>})
                }
            </tbody>
        </Table>
        </Container>
    )
}
export default Administrador;