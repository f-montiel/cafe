import { Button, Form, FormControl, FormGroup, FormLabel, FormText, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { consultarUsuarios } from './components/helpers/queries';
const Login = ({consultarUsuarioLogueado})=>{
  const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const handleClose = () => {
    setShow(false);
    reset();
  }
  const handleShow = () => setShow(true);

  const onSubmit = (data)=>{
    consultarUsuarios().then((respuesta)=>{
      // buscar el email en el array de usuarios con la find.
      // despues chequear la contraseña.
      let usuarioValidado = respuesta.filter((usuario)=>{
        return usuario.email === data.usuario && usuario.password === data.password;
      });

      // find por el email -> Obtengo si existe un usuario con ese email -> el email no es correcto registrate.
      // -> si existe el email chequeo que la contraseña este bien si esta bien logueo si esta mal alert. 
      if(usuarioValidado[0]){
        //agregar un mensaje de usuario logueado.

        // guardar en el ocal storage para que cuando lo cierre no se borre la sesion.
        sessionStorage.setItem("usuario", JSON.stringify(usuarioValidado));
        consultarUsuarioLogueado(); 
        handleClose();
      }else{
        // aca va el sweet alert
        alert("El usuario o la contraseña no son validos");
      }
    })
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