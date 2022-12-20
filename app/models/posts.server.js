export const getPosts = async () => {
    const resp = await fetch(`${process.env.API_URL}/posts?populate=*`);
    return await resp.json(); // resultado
}

export const getPost = async (url) => {
    const resp = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`);
    return await resp.json(); // resultado
}
