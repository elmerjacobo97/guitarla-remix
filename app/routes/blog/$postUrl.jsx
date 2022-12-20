import {getPost} from "~/models/posts.server";
import {useLoaderData} from "@remix-run/react";
import {formatearFecha} from "~/utils/helpers";

export const loader = async ({params}) => {
    const {postUrl} = params;
    const post = await getPost(postUrl);

    if (post?.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post;
}

export const meta = ({data}) => {
    if (!data) {
        return {
            title: 'GuitarLA - Entrada no encontrada',
            description: 'Guitarras, venta de guitarras, entrada no encontrada',
        }
    }

    return {
        title: `GuitarLA - ${data?.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras, entrada ${data?.data[0].attributes.titulo}`
    }
}

const Post = () => {
    const post = useLoaderData();
    const {titulo, contenido, imagen, publishedAt} = post?.data[0].attributes


    return (
        <article className="post mt-5">
            <img
                src={imagen?.data?.attributes?.url}
                className="animate__animated animate__fadeIn"
                alt={`Imagen blog ${titulo}`}
            />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    );
};

export default Post;
