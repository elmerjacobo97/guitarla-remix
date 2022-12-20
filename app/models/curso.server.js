export const getCurso = async () => {
    const resp = await fetch(`${process.env.API_URL}/curso?populate=*`);
    return await resp.json(); // resultado
}
