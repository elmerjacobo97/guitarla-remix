import {useState} from "react";
import {getGuitarra} from "~/models/guitarras.server";
import {useLoaderData, useOutletContext} from "@remix-run/react";

export const loader = async ({params}) => {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada',
        })
    }

    return guitarra; // guitarra
}

export const meta = ({data}) => {
    if (!data) {
        return {
            title: 'GuitarLA - Guitarra no encontrada',
            description: 'Guitarras, venta de guitarras, guitarra no encontrada',
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
}

const Guitarra = () => {
    const {agregarCarrito} = useOutletContext();

    const [cantidad, setCantidad] = useState(0);
    const guitarra = useLoaderData();
    const { descripcion, nombre, imagen, precio } = guitarra?.data[0].attributes;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad');
            return;
        }

        const guitarraSeleccionada = {
            id: guitarra?.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        }

        agregarCarrito(guitarraSeleccionada);
    }

    return (
        <div className="guitarra">
            <img
                src={imagen.data.attributes.url}
                className="animate__animated animate__fadeIn"
                alt={`Imagen guitarra ${nombre}`}
            />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>

                <form
                    className="formulario"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select
                        id="cantidad"
                        onChange={(e) => setCantidad(+e.target.value)} // convertir a number
                    >
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
    );
};

export default Guitarra;
