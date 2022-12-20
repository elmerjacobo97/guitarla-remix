import {getGuitarras} from '~/models/guitarras.server';
import {useLoaderData} from "@remix-run/react";
import {ListadoGuitarras} from "~/components";

export const meta = () => {
    return {
        title: 'GuitarLA - Guitarras de Guitarras',
        description: 'GuitarLA - Nuestra colección de guitarras'
    }
}

export const loader = () => {
    return getGuitarras(); // guitarras
}

const Guitarras = () => {
    const guitarras = useLoaderData();

    return (
        <ListadoGuitarras guitarras={guitarras} />
    );
};

export default Guitarras;
