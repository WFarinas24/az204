import { data } from "../data/data-examen";

export const ObtenerExamenes = () => {
    const items = JSON.parse(localStorage.getItem('examen-204'));
    return items?.sort((a, b) => new Date(b.fechaCrea) - new Date(a.fechaCrea)) ?? []
}

export const ObtenerPregunta = (idExamen, idPregunta) => {
    const examen = ObtenerExamen(idExamen);
    const index = examen.preguntas.findIndex(x => x.id === idPregunta)

    return {
        pregunta: examen.preguntas[index],
        index: index,
        anterior: examen.preguntas[index - 1]?.id,
        siguiente: examen.preguntas[index + 1]?.id
    };
}

export const ObtenerExamen = (idExamen) => {
    const items = JSON.parse(localStorage.getItem('examen-204'));
    return items.find(x => x.id === idExamen) ?? {};
}

export const AgregarExamen = (examen) => {
    localStorage.setItem('examen-204', JSON.stringify(examen));
    return examen
}

export const GenerarExamen = () => {
    const examen = data.filter(x => x.respuestas.length > 0).sort(() => Math.random() - 0.5).slice(0, 20).map(x => {
        x.respuestas = x.respuestas.sort(() => Math.random() - 0.5);
        return x
    });

    const dataExamen = {
        preguntas: examen,
        nota: 0,
        estado: "Incompleto",
        tiempo: 0,
        fechaCrea: new Date(),
        fechaEdit: new Date(),
        id: crypto.randomUUID()
    }

    const examenes = ObtenerExamenes();

    examenes.push(dataExamen);
    AgregarExamen(examenes)
    return dataExamen;
}

export const MoficarRespuesta = ({ idExamen, idPregunta, respuesta }) => {

    const items = (JSON.parse(localStorage.getItem('examen-204'))).map((x => {
        if (x.id === idExamen) {
            x.ultimaPregunta = idPregunta
            x.preguntas = x.preguntas?.map(y => {
                if (y.id === idPregunta) {
                    y.usuarioRespuesta = respuesta.replace(".", "")
                    y.fechaEdit = new Date();
                }
                return y
            })
        }
        return x;

    }) ?? [])

    AgregarExamen(items)

}

export const TerminarExamen = ({ idExamen }) => {
    const items = (JSON.parse(localStorage.getItem('examen-204'))).map((x => {
        if (x.id === idExamen) {
            y.fechaEdit = new Date();
            y.nota = _examen.preguntas?.filter(x => x.respuestaCorrecta.includes(x.usuarioRespuesta)).length / 20 * 100
        }
        return x;

    }) ?? [])

    AgregarExamen(items)
}