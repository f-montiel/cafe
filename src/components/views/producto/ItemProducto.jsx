import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { borrarProducto, consultarAPI } from "../../helpers/queries";

const ItemProducto = ({producto, setProductos}) => {
    const confirmacion = ()=>{
        swal({
            title: "Estas seguro?",
            text: "Si aceptas el producto "+producto.nombreProducto+" sera borrado",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if(willDelete) {
              borrarProducto(producto.id).then((respuesta)=>{
                if(respuesta.status===200){
                  swal("Producto borrado", {
                    icon: "success"
                  });
                  consultarAPI().then((respuesta)=>{
                    setProductos(respuesta);
                  });
                }else{
                  swal("El producto no fue borrado");    
                }
              })
            } else {
              swal("El producto no fue borrado");
            }
          });
        }
    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombreProducto}</td>
            <td>${producto.precio}</td>
            <td>{producto.categoria}</td>
            <td>{producto.imagen}</td>
            <td>
                <NavLink to={"/editarProducto/"+producto.id} className={"mx-2 my-sm-2 my-md-0"}><i className={"bi bi-pencil-square text-warning fs-5"}></i></NavLink>
                <Button variant="none" className={"p-0 mx-2 my-sm-2 my-md-0"} onClick={confirmacion}><i className={"bi bi-trash text-danger fs-5"}></i></Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
