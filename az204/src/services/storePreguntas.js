import { create } from 'zustand'

export const useStoreExamenes = create((set, get) => ({
  examenes: () => [],
  updateExamenes: (examenes) => set({ examenes }),
  idPregunta: (id) => {
    let preguntas = get()
    try {
      preguntas = preguntas?.examenes.map(x => x.preguntas.map(y => y.usuarioRespuesta && y.id === id ? y : []).flatMap(res => res)).flatMap(res => res)
      const cant = preguntas.filter(x => x.respuestaCorrecta.includes(x.usuarioRespuesta)).length
      return { correctas: preguntas.length - cant, incorrectas: cant }
    } catch (error) {
      return { correctas: 0, incorrectas: 0 }
    }
  }

}))
