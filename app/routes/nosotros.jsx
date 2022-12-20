import ImgNosotros from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export const meta = () => {
    return {
        title: 'GuitarLA - Nosotros',
        description: 'Venta de guitarras, blog de música'
    }
}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'preload',
            href: ImgNosotros,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img
                    src={ImgNosotros}
                    className="animate__animated animate__fadeIn"
                    alt="Imagen nosotros"
                />
                <div>
                    <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                    </p>
                    <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Nosotros;
