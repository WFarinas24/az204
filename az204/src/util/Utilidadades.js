export const ObtenerTiempo = (segundosP) => {
    const segundos = (Math.round(segundosP % 0x3C)).toString();
    const horas    = (Math.floor(segundosP / 0xE10)).toString();
    const minutos  = (Math.floor(segundosP / 0x3C ) % 0x3C).toString();

    return `${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

}