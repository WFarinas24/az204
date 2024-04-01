


export const Traducir = async (texto) => {

    const resp = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&hl=es-MX&dt=t&dt=bd&dj=1&source=bubble&q='
    + encodeURI(texto),
    )

    const json = await resp.json();


    return json.sentences.map(x => x.trans.trim()).join(" ")
}