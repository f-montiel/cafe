import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarProducto } from "../../helpers/queries";

const CrearProducto = ()=>{
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const redirect = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        let producto = {
            "nombreProducto":nombre,
            "precio":precio,
            "imagen":imagen,
            "categoria":categoria
        }
        guardarProducto(producto).then((respuesta)=>{redirect("/administrador")});
    }
    return(
        <Container className="mainSection">
            <h1 className="display-5 mt-5">Nuevo Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                    <Form.Label>Nombre del Producto*</Form.Label>
                    <Form.Control type="text" name="nombre" onChange={(e)=>{setNombre(e.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="text" name="precio" onChange={(e)=>{setPrecio(e.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>URL Imagen*</Form.Label>
                    <Form.Control type="text" name="imagen" onChange={(e)=>{setImagen(e.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select name="categoria" onChange={(e)=>{setCategoria(e.target.value)}}>
                        <option value=""></option>
                        <option value="Bebidas Calientes">Bebidas Calientes</option>
                        <option value="Cosas Dulces">Cosas Dulces</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" className={"my-3"}>Guardar</Button>
            </Form>
        </Container>
    );
}

export default CrearProducto;