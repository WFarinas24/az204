import { create } from "zustand";
import { ObtenerPreguntasImagenes } from "./servicios";

export const useStoreExamenes = create((set, get) => ({
  examenes: () => [],
  updateExamenes: (examenes) => set({ examenes }),
  idPregunta: (id) => {
    let preguntas = get();
    try {
      preguntas = preguntas?.examenes
        .map((x) =>
          x.preguntas
            .map((y) => (y.usuarioRespuesta && y.id === id ? y : []))
            .flatMap((res) => res)
        )
        .flatMap((res) => res);
      const cant = preguntas.filter((x) =>
        x.respuestaCorrecta.includes(x.usuarioRespuesta)
      ).length;
      return { correctas: cant, incorrectas: preguntas.length - cant };
    } catch (error) {
      return { correctas: 0, incorrectas: 0 };
    }
  },
}));

export const useEstadoGlobal = create((set, get) => ({
  preguntasImanges: () => [],
  preguntaActual : 0,
  updatePreguntas: () => set({ preguntasImanges: ObtenerPreguntasImagenes() }),
  updatePreguntaActual: (pregunta) => set({ preguntaActual : pregunta}),
}));
