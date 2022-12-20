import {Link} from "@remix-run/react";
import Logo from '../../public/img/logo.svg';
import {Navigation} from "~/components";

export const Header = () => {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to="/">
                    <img className="logo" src={Logo} alt="imagen logo" />
                </Link>

                <Navigation />
            </div>
        </header>
    );
};
