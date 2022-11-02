import { Button, Form, FormControl, FormGroup, FormLabel, FormText, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { consultarUsuarios, guardarUsuario } from './components/helpers/queries';
const Registrar = ()=>{
    const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const handleClose = () => {
    setShow(false);
    reset();
  }
  const handleShow = () => setShow(true);

  const onSubmit = (data)=>{
    consultarUsuarios().then((respuesta)=>{
        let nuevoUsuario = respuesta.filter((usuario)=>{
            return usuario.email === data.email;
        })
        if(!nuevoUsuario[0]){
            guardarUsuario(data);
            handleClose();
            // alertar que el usuario se creo correctamente.
        }else{
            alert("el usuario existe");
        }
    })
  }
    return(
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className='my-3'>
                <FormLabel>Nombre</FormLabel>
                <FormControl 
                  type='text'
                  {...register("nombre", {
                    required: "El nombre es un dato obligatorio",
                    minLength:{
                      value: 4,
                      message: "El nombre debe contener mas de 4 caracteres"
                    }
                  })}
                ></FormControl>
                <FormText className='text-danger'>{errors.nombre?.message}</FormText>
              </FormGroup>
              <FormGroup className='my-3'>
                <FormLabel>Apellido</FormLabel>
                <FormControl 
                  type='text'
                  {
                    ...register("apellido", {
                      required: "El apellido es un dato obligatorio",
                      minLength:{
                        value: 4,
                        message: "El apellido debe contener mas de 4 caracteres"
                      }
                    })
                  }
                  ></FormControl>
                  <FormText className='text-danger'>{errors.password?.message}</FormText>
              </FormGroup>
              <FormGroup className='my-3'>
                <FormLabel>Email</FormLabel>
                <FormControl 
                  type='email'
                  {...register("email", {
                    required: "El email es un campo obligatorio",
                    pattern:{
                      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                      message: "El email no es valido"
                    }
                  })}
                ></FormControl>
                <FormText className='text-danger'>{errors.email?.message}</FormText>
              </FormGroup>
              <FormGroup className='my-3'>
                <FormLabel>Contraseña</FormLabel>
                <FormControl 
                  type='password'
                  {
                    ...register("password", {
                      required: "La contraseña es requerida"
                    })
                  }
                  ></FormControl>
                  <FormText className='text-danger'>{errors.password?.message}</FormText>
              </FormGroup>
            <Button className='mx-2' variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className='mx-2' variant="primary" type='submit'>
              Registrar
            </Button>
            </Form>
          </Modal.Body>
        </Modal>        
        <Button variant='none' className={"nav-item nav-link"} onClick={handleShow}>Registrar</Button>
        </>
    );
}

export default Registrar;