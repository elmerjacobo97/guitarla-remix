import {Navigation} from "~/components";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navigation />
                <p className="copyright">
                    &copy; Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

