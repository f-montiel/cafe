import { Button, Form, FormControl, FormGroup, FormLabel, FormText, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from './components/helpers/queries';
const Login = ({consultarUsuarioLogueado})=>{
  const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const handleClose = () => {
    setShow(false);
    reset();
  }
  const handleShow = () => setShow(true);

  const onSubmit = (data)=>{
    login(data);
    consultarUsuarioLogueado();
  }

    return(
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className='my-3'>
                <FormLabel>Email</FormLabel>
                <FormControl 
                  type='text'
                  {...register("usuario", {
                    required: "El usuario no es valido",
                    pattern:{
                      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                      message: "El email no es valido"
                    }
                  })}
                ></FormControl>
                <FormText className='text-danger'>{errors.usuario?.message}</FormText>
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
              Ingresar
            </Button>
            </Form>
          </Modal.Body>
        </Modal>        
        <Button variant='none' className={"nav-item nav-link"} onClick={handleShow}>Login</Button>
        </>
    );
}

export default Login;