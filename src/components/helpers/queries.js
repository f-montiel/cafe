const URLProducto = import.meta.env.VITE_URL_PRODUCTO;
const URLUsuarios = import.meta.env.VITE_URL_USUARIO;
const URLLogin = import.meta.env.VITE_URL_LOGIN;
export const consultarAPI = async ()=>{
    try {
        let respuesta = await fetch(URLProducto);
        let listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        return false;
    }
}

export const consultaPorId = async (id)=>{
    try {
        let respuesta = await fetch(URLProducto+"/"+id);
        let producto = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch (error) {
        return false;
    }
}

export const guardarProducto = async (producto)=>{
    try {
        let respuesta = await fetch(URLProducto, {
            method: 'POST',
            headers:{
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const actualizarProducto = async (producto)=>{
    try {
        let respuesta = await fetch(URLProducto+"/"+producto.id, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        return respuesta;
    } catch (error) {
        return false;
    }
}

export const borrarProducto = async (id)=>{
    try {
        let respuesta = await fetch(URLProducto+"/"+id, {
            method: 'DELETE'
        });
        return respuesta;
    } catch (error) {
        return false;
    }
}

export const consultarUsuarios = async ()=>{
    try {
        let respuesta = await fetch(URLUsuarios);
        let listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        return false;
    }
}

export const guardarUsuario = async (usuario)=>{
    try {
        let respuesta = await fetch(URLUsuarios, {
            method: 'POST',
            headers:{
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const login = async(usuario)=>{
    try {
        let respuesta = await fetch(URLLogin, {
            method: 'POST',
            headers:{
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(usuario) 
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}