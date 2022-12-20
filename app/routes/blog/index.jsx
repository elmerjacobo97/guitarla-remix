import {getPosts} from "~/models/posts.server";
import {useLoaderData} from "@remix-run/react";
import {ListadoPosts} from "~/components/listado-posts";

export const meta = () => {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLA - Blog de música y venta de guitarras'
    }
}

export const loader = async () => {
    const posts = await getPosts();
    return posts.data;
}


const Blog = () => {
    const posts = useLoaderData();

    return (
        <ListadoPosts posts={posts} />
    );
};

export default Blog;
