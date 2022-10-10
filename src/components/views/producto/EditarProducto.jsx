import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { actualizarProducto, consultaPorId } from "../../helpers/queries";

const EditarProducto = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const {id} = useParams();
    const redirect = useNavigate();
    useEffect(()=>{
        consultaPorId(id).then((producto)=>{
            setNombre(producto.nombreProducto);
            setPrecio(producto.precio);
            setImagen(producto.imagen);
            setCategoria(producto.categoria);
        })
    },[]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        let producto = {
            "id":id,
            "nombreProducto":nombre,
            "precio":precio,
            "imagen":imagen,
            "categoria":categoria
        }
        actualizarProducto(producto).then((respuesta)=>{redirect("/administrador")});
    }
    return (
        <Container className="mainSection">
            <h1 className="display-5 mt-5">Editar Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                    <Form.Label>Nombre del Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                        value={nombre}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={(e) => {
                            setPrecio(e.target.value);
                        }}
                        value={precio}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>URL Imagen*</Form.Label>
                    <Form.Control
                        type="text"
                        name="imagen"
                        onChange={(e) => {
                            setImagen(e.target.value);
                        }}
                        value={imagen}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        name="categoria"
                        onChange={(e) => {
                            setCategoria(e.target.value);
                        }}
                        value={categoria}
                    >
                        <option value=""></option>
                        <option value="Bebidas Calientes">
                            Bebidas Calientes
                        </option>
                        <option value="Cosas Dulces">Cosas Dulces</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" className={"my-3"}>
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};
export default EditarProducto;
