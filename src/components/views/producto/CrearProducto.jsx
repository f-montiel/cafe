import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarProducto } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const CrearProducto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const redirect = useNavigate();
    const onSubmit = (data) => {
        guardarProducto(data).then((respuesta) => {
            if(respuesta.status===201){
                swal({
                    title: "El producto fue guardado con exito",
                    text: `El producto ${data.nombreProducto} se guardo con exito`,
                    icon: "success",
                    button: "Aceptar",
                  }).then((value)=>{
                   if(value){
                       reset();
                       redirect("/administrador");
                   } 
                  });
            }else{
                swal({
                    title: "El producto no fue guardado",
                    text: "Intente nuevamente mas tarde",
                    icon: "error",
                    button: "Aceptar"
                  })
            }
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
                        {...register("nombreProducto",{
                            required: 'El nombre del producto es un dato obligatorio',
                            minLength: {
                                value:4,
                                message:"la cantidad maxima de caracteres es 4"
                            }
                        })}
                        ></Form.Control>
                        <Form.Text className="text-danger">
                            {
                                errors.nombreProducto?.message
                            }
                        </Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio"
                        {...register("precio",{
                            required:"El precio es un campo obligatorio",
                            min:{
                                value: 100,
                                message: "El precio debe ser mayor a 100"
                            }
                        })}
                        ></Form.Control> 
                        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>URL Imagen*</Form.Label>
                    <Form.Control
                        type="text"
                        name="imagen"
                        {...register("imagen",{
                            required:"La imagen es un campo obligatorio",
                            pattern:{
                                value: /^(ftp|http|https):\/\/[^ "]+$/,
                                message: "La direccion no es valida"
                            }
                        })}
                        >
                    </Form.Control> 
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        name="categoria"
                        {...register("categoria",{
                            required:"La categoria es un campo obligatorio"
                        })}
                    >
                        <option value=""></option>
                        <option value="Bebidas Calientes">
                            Bebidas Calientes
                        </option>
                        <option value="Cosas Dulces">Cosas Dulces</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>
                <Button type="submit" className={"my-3"}>
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;
