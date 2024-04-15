import { data } from '../data/data-examen'

export const ObtenerExamenes = () => {
  const items = JSON.parse(localStorage.getItem('examen-204'))
  return items?.sort((a, b) => new Date(b.fechaCrea) - new Date(a.fechaCrea)) ?? []
}

export const ObtenerPregunta = (idExamen, idPregunta) => {
  const examen = ObtenerExamen(idExamen)
  const index = examen.preguntas.findIndex(x => x.id === idPregunta)
  const cantidadPreguntas = examen.preguntas.length
  return {
    pregunta: examen.preguntas[index],
    index,
    anterior: examen.preguntas[index - 1]?.id,
    siguiente: examen.preguntas[index + 1]?.id,
    estado: examen.estado,
    cantidadPreguntas
  }
}

export const ObtenerExamen = (idExamen) => {
  const items = JSON.parse(localStorage.getItem('examen-204'))
  return items.find(x => x.id === idExamen) ?? {}
}

export const AgregarExamen = (examen) => {
  localStorage.setItem('examen-204', JSON.stringify(examen))
  return examen
}
export const CantidadPreguntasTotales = () => {
  const examen = data.filter(x => x.respuestas.length > 0)
  return examen.length
}
export const CantidadPreguntasTotalesConImagenes = () => {
  const examen = data
  return examen.length
}
export const GenerarExamen = () => {
  const examen = data.filter(x => x.respuestas.length > 0).sort(() => Math.random() - 0.5).slice(0, 20).map(x => {
    x.respuestas = x.respuestas.sort(() => Math.random() - 0.5)
    return x
  })

  const dataExamen = {
    preguntas: examen,
    nota: 0,
    estado: 'Incompleto',
    tiempo: 0,
    fechaCrea: new Date(),
    fechaEdit: new Date(),
    id: crypto.randomUUID()
  }

  const examenes = ObtenerExamenes()

  examenes.push(dataExamen)
  AgregarExamen(examenes)
  return dataExamen
}

export const GenerarRepaso = ({ cantidad, inicio, imagenes, aleatorio }) => {
  console.log({ data: data.slice(parseInt(inicio), parseInt(cantidad)) })

  let todasPreguntas = imagenes ? data.slice(parseInt(inicio), parseInt(inicio + cantidad)) : data.filter(x => (x.respuestas.length > 0)).slice(parseInt(inicio), parseInt(inicio + cantidad))
  todasPreguntas = aleatorio ? todasPreguntas.sort(() => Math.random() - 0.5) : todasPreguntas

  const examen = todasPreguntas.map(x => {
    x.respuestas = x.respuestas.sort(() => Math.random() - 0.5)
    return x
  })

  const dataExamen = {
    preguntas: examen,
    nota: 0,
    estado: 'Incompleto',
    tiempo: 0,
    fechaCrea: new Date(),
    fechaEdit: new Date(),
    id: crypto.randomUUID(),
    tipo: 'Repaso'
  }

  const examenes = ObtenerExamenes()

  examenes.push(dataExamen)
  AgregarExamen(examenes)
  return dataExamen
}

export const MoficarRespuesta = ({ idExamen, idPregunta, respuesta }) => {
  const items = (JSON.parse(localStorage.getItem('examen-204'))).map((x => {
    if (x.id === idExamen) {
      x.ultimaPregunta = idPregunta
      x.preguntas = x.preguntas?.map(y => {
        if (y.id === idPregunta) {
          y.usuarioRespuesta = respuesta.replace('.', '')
          y.fechaEdit = new Date()
        }
        return y
      })
    }
    return x
  }) ?? [])

  AgregarExamen(items)
}

export const GuardarFavorito = (idPregunta) => {
  let items = ((JSON.parse(localStorage.getItem('examen-204-favoritos'))) ?? [])
  if (items.includes(idPregunta)) {
    items = items.filter(x => x != idPregunta)
  } else {
    items.push(idPregunta)
  }

  localStorage.setItem('examen-204-favoritos', JSON.stringify(items))
}

export const ExisteFavorito = ({ idPregunta }) => {
  const items = ((JSON.parse(localStorage.getItem('examen-204-favoritos'))) ?? [])
  return items.includes(idPregunta)
}

export const TerminarExamen = ({ idExamen }) => {
  const items = (JSON.parse(localStorage.getItem('examen-204'))).map((x => {
    if (x.id === idExamen) {
      x.fechaEdit = new Date()
      x.nota = (x.preguntas?.filter(x => x.respuestaCorrecta.includes(x.usuarioRespuesta)).length / 20 * 100).toFixed(2)
      x.estado = 'Terminado'
    }
    return x
  }) ?? [])
  AgregarExamen(items)
}

export const ActualizarTiempoExamen = ({ idExamen }) => {
  const items = (JSON.parse(localStorage.getItem('examen-204'))).map((x => {
    if (x.id === idExamen && x.estado != 'Terminado') {
      x.tiempo = parseInt(x.tiempo ?? '0') + 1
      x.fechaEdit = new Date()
    }
    return x
  }) ?? [])
  AgregarExamen(items)
}

export const EliminarExamen = (idExamen) => {
  const items = (JSON.parse(localStorage.getItem('examen-204'))).filter((x => {
    return (x.id != idExamen)
  }) ?? [])

  AgregarExamen(items)
}

export const ClonarExamen = (idExamen) => {
  const items = (JSON.parse(localStorage.getItem('examen-204')) ?? [])
  const item = items.find(x => x.id == idExamen)
  const clone = JSON.parse(JSON.stringify(item))
  clone.id = crypto.randomUUID()
  clone.nota = 0
  clone.fechaCrea = new Date()
  clone.fechaEdit = new Date()
  clone.tiempo = 0
  clone.estado = 'Incompleto'
  clone.preguntas = clone.preguntas.map((x) => {
    x.usuarioRespuesta = null
    delete x.usuarioRespuesta

    return x
  })

  delete clone.ultimaPregunta

  items.push(clone)
  AgregarExamen(items)
}

export const ObtenerPaginaExamTopic = (idPregunta) => {
  const examen = data.findIndex(x => x.id === idPregunta)
  const index = Math.trunc((examen * 0.1) + 1)
  return index
}
