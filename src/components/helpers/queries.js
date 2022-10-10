const URL = import.meta.env.VITE_URL;

export const consultarAPI = async ()=>{
    try {
        let respuesta = await fetch(URL);
        let listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        return false;
    }
}

export const consultaPorId = async (id)=>{
    try {
        let respuesta = await fetch(URL+"/"+id);
        let producto = await respuesta.json();
        return producto;
    } catch (error) {
        return false;
    }
}

export const guardarProducto = async (producto)=>{
    try {
        let respuesta = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        return "OK";
    } catch (error) {
        return "Algo salio mal";
    }
}

export const actualizarProducto = async (producto)=>{
    try {
        let respuesta = await fetch(URL+"/"+producto.id, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        return "OK";
    } catch (error) {
        return "Algo salio mal";
    }
}

export const borrarProducto = async (id)=>{
    try {
        let respuesta = await fetch(URL+"/"+id, {
            method: 'DELETE'
        });
        return "OK";
    } catch (error) {
        return "Algo salio mal";
    }
}