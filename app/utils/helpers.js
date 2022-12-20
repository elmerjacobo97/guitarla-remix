export const formatearFecha = (fecha) => {
    const newFecha = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newFecha.toLocaleDateString('es-ES', options);
}
