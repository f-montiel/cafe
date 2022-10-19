import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { actualizarProducto, consultaPorId } from "../../helpers/queries";

const EditarProducto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();
    const {id} = useParams();
    const redirect = useNavigate();
    useEffect(()=>{
        consultaPorId(id).then((respuesta)=>{
            if(respuesta.status===200){
                setValue("nombreProducto", respuesta.dato.nombreProducto);
                setValue("precio", respuesta.dato.precio);
                setValue("imagen", respuesta.dato.imagen);
                setValue("categoria", respuesta.dato.categoria);
            }
        })
    },[]);
    const onSubmit = (data)=>{
        let producto = data;
        producto.id = id;
        actualizarProducto(producto).then((respuesta)=>{
            // agregar el if con el codigo 200 del status para alertar o redirecionar.
            redirect("/administrador")
        });
    }
    return (
        <Container className="mainSection">
            <h1 className="display-5 mt-5">Editar Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="my-2">
                    <Form.Label>Nombre del Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        {
                            ...register("nombreProducto",{
                                required: 'El nombre del producto es un dato obligatorio'
                            })
                        }
                    ></Form.Control>
                    <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        {
                            ...register("precio",{
                                required: 'El precio del producto es un dato obligatorio'
                            })
                        }
                    ></Form.Control>
                    <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>URL Imagen*</Form.Label>
                    <Form.Control
                        type="text"
                        name="imagen"
                        {
                            ...register("imagen",{
                                required: 'La imagen del producto es un dato obligatorio'
                            })
                        }
                    ></Form.Control>
                    <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        name="categoria"
                        {
                            ...register("categoria",{
                                required: 'La categoria del producto es un dato obligatorio'
                            })
                        }
                    >
                        <option value=""></option>
                        <option value="Bebidas Calientes">
                            Bebidas Calientes
                        </option>
                        <option value="Cosas Dulces">Cosas Dulces</option>
                    </Form.Select>
                    <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
                </Form.Group>
                <Button type="submit" className={"my-3"}>
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};
export default EditarProducto;
