import {getGuitarras} from "~/models/guitarras.server";
import {getPosts} from "~/models/posts.server";
import {getCurso} from "~/models/curso.server";
import {useLoaderData} from "@remix-run/react";
import {Curso, ListadoGuitarras} from "~/components";
import {ListadoPosts} from "~/components/listado-posts";
import stylesGuitarra from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export const meta = () => {

}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarra,
        },
        {
            rel: 'stylesheet',
            href: stylesPosts,
        },
        {
            rel: 'stylesheet',
            href: stylesCurso,
        }
    ]
}

export const loader = async () => {
    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso(),
    ]);
    return {
        guitarras,
        posts,
        curso,
    }
}

const Index = () => {
    const {guitarras, posts, curso} = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>
            <Curso
                curso={curso?.data.attributes}
            />
            <section className="contenedor">
                <ListadoPosts posts={posts?.data} />
            </section>
        </>
    );
};

export default Index
