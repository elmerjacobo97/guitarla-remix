import {Link} from "@remix-run/react";

export const Guitarra = ({guitarra}) => {
    const { descripcion, imagen, precio, url, nombre } = guitarra;

    return (
        <div className="guitarra">
            <img
                src={imagen.data.attributes.formats.medium.url}
                className="animate__animated animate__fadeIn"
                alt={`Imagen guitarra ${nombre}`}
            />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="description">{descripcion}</p>
                <p className="precio">${precio}</p>

                <Link
                    className="enlace"
                    to={`/guitarras/${url}`}
                >
                    Ver Producto
                </Link>
            </div>
        </div>
    );
};
