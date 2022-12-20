import {Outlet, useOutletContext} from "@remix-run/react";
import styles from '~/styles/guitarras.css';

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

const Guitarras = () => {

    return (
        <main className="contenedor">
            <Outlet
                context={useOutletContext()}
            />
        </main>
    );
};

export default Guitarras;
