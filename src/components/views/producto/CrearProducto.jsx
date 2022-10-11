import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarProducto } from "../../helpers/queries";
import { useForm } from "react-hook-form";

const CrearProducto = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const redirect = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        let producto = {
            nombreProducto: nombre,
            precio: precio,
            imagen: imagen,
            categoria: categoria,
        };
        guardarProducto(producto).then((respuesta) => {
            redirect("/administrador");
        });
    };
    return (
        <Container className="mainSection">
            <h1 className="display-5 mt-5">Nuevo Producto</h1>
            <hr />
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="my-2">
                    <Form.Label>Nombre del Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        required
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                        {...register("nombreProducto",{
                            required:true
                        })}
                        aria-invalid={errors.nombreProducto ? "true" : "false"}
                        ></Form.Control>
                        {
                            errors.nombreProducto?.type === 'required' && 
                            <Form.Text className="text-danger">
                                Campo Obligatorio
                            </Form.Text>
                        }
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={(e) => {
                            setPrecio(e.target.value);
                        }}
                        {...register("precio",{
                            required:true
                        })}
                        ></Form.Control>
                        {
                            errors.precio?.type === 'required' && 
                            <Form.Text className="text-danger">
                                Campo Obligatorio
                            </Form.Text>
                        }
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>URL Imagen*</Form.Label>
                    <Form.Control
                        type="text"
                        name="imagen"
                        onChange={(e) => {
                            setImagen(e.target.value);
                        }}
                        {...register("imagen",{
                            required:true
                        })}
                        >
                    </Form.Control>
                        {
                            errors.imagen?.type === 'required' && 
                            <Form.Text className="text-danger">
                                Campo Obligatorio
                            </Form.Text>
                        }
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        name="categoria"
                        onChange={(e) => {
                            setCategoria(e.target.value);
                        }}
                        {...register("categoria",{
                            required:true
                        })}
                    >
                        <option value=""></option>
                        <option value="Bebidas Calientes">
                            Bebidas Calientes
                        </option>
                        <option value="Cosas Dulces">Cosas Dulces</option>
                    </Form.Select>
                    {
                            errors.categoria?.type === 'required' && 
                            <Form.Text className="text-danger">
                                Campo Obligatorio
                            </Form.Text>
                        }
                </Form.Group>
                <Button type="submit" className={"my-3"}>
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;
