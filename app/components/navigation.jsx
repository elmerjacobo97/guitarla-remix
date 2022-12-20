import {Link, useLocation} from "@remix-run/react";
import imagen from '../../public/img/carrito.png';

export const Navigation = () => {
    const location = useLocation();
    return (
        <nav className="navigation">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link
                to="/nosotros"
                className={location.pathname === '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to="/guitarras"
                className={location.pathname === '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
            <Link
                to="/carrito"
            >
                <img src={imagen} alt="imagen carrito"/>
            </Link>
        </nav>
    );
};
