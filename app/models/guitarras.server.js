export const getGuitarras = async () => {
    const resp = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    return await resp.json(); // resultado
}

export const getGuitarra = async (url) => {
    const resp = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`);
    return await resp.json(); // resultado
}
