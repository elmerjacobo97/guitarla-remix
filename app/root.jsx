import {useEffect, useState} from "react";
import {Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link} from "@remix-run/react";
import {Footer, Header} from "~/components";
import styles from '~/styles/app.css';

export const meta = () => {
    return {
        charset: "utf-8",
        title: 'GuitarLA - Remix',
        viewport: "width=device-width,initial-scale=1",
    }
}

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: 'true'
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        },
        {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        },
        {
            rel: "stylesheet",
            href: styles,
        },
    ]
}

export default function App() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    const agregarCarrito = (guitarra) => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    // Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad;
                    // guitarraState.cantidad += guitarra.cantidad;
                }
                return guitarraState;
            })
            // Añadir al carrito
            setCarrito(carritoActualizado);
        } else {
            // Agregar al carrito
            setCarrito([...carrito, guitarra]);
        }
    }

    const actualizarCantidad = (guitarra) => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState;
        })
        // Añadir al carrito
        setCarrito(carritoActualizado);
    }

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !==id);
        const confirmar = confirm('¿Estás seguro eliminar este producto de tu carrito?');
        if (!confirmar) return;
        setCarrito(carritoActualizado);
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarProducto,
                }}
            />
        </Document>
    )
}


function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                { children }
                <Footer />
            </body>

            <Scripts />
            <LiveReload />
        </html>
    )
}

// Manejo de errores
export const CatchBoundary = () => {
    const error = useCatch();

    return (
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link to="/" className="error-enlace">
                Ir al Inicio
            </Link>
        </Document>
    )
}

export const ErrorBoundary = ({error}) => {
    return (
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link to="/" className="error-enlace">
                Ir al Inicio
            </Link>
        </Document>
    )
}

// * Definiciones
// ~ hace referencia directamente a la carpeta "app"

