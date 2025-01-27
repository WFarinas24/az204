import { data } from "../data/data-examen";
import { dataImagenes } from "../data/data-imagenes";

export const ObtenerExamenes = () => {
  const items = JSON.parse(localStorage.getItem("examen-204"));
  return (
    items?.sort((a, b) => new Date(b.fechaCrea) - new Date(a.fechaCrea)) ?? []
  );
};

export const ObtenerPregunta = (idExamen, idPregunta) => {
  const examen = ObtenerExamen(idExamen);
  const index = examen.preguntas.findIndex((x) => x.id === idPregunta);
  const _preguntaData = ObtenerPreguntaData(idPregunta);

  const pregunta = examen.preguntas[index];
  pregunta.pregunta = _preguntaData.pregunta;

  const cantidadPreguntas = examen.preguntas.length;

  return {
    pregunta,
    index,
    anterior: examen.preguntas[index - 1]?.id,
    siguiente: examen.preguntas[index + 1]?.id,
    estado: examen.estado,
    cantidadPreguntas,
  };
};

export const ObtenerExamen = (idExamen) => {
  const items = JSON.parse(localStorage.getItem("examen-204")) ?? [];
  const examen = items.find((x) => x.id === idExamen) ?? {};
  examen.preguntas.forEach((x) => {
    x.pregunta = ObtenerPreguntaData(x.id)?.pregunta;
  });

  return examen;
};

export const ObtenerPreguntaData = (idpregunta) => {
  const pregunta = data.find((x) => x.id === idpregunta);

  return pregunta;
};

export const AgregarExamen = (examen) => {
  localStorage.setItem("examen-204", JSON.stringify(examen));
  return examen;
};
export const CantidadPreguntasTotales = () => {
  const examen = data.filter((x) => x.respuestas.length > 0);
  return examen.length;
};
export const CantidadPreguntasTotalesConImagenes = () => {
  const examen = data;
  return examen.length;
};

export const GenerarExamen = () => {
  const examen = data
    .filter((x) => x.respuestas.length > 0)
    .sort(() => Math.random() - 0.5)
    .slice(0, 20)
    .map((x) => {
      x.respuestas = x.respuestas.sort(() => Math.random() - 0.5);
      return x;
    });

  examen.forEach((x) => {
    console.log(x);
    x.pregunta = null;
  });

  const dataExamen = {
    preguntas: examen,
    nota: 0,
    estado: "Incompleto",
    tiempo: 0,
    fechaCrea: new Date(),
    fechaEdit: new Date(),
    id: crypto.randomUUID(),
  };

  const examenes = ObtenerExamenes();

  examenes.push(dataExamen);
  AgregarExamen(examenes);
  return dataExamen;
};

export const GenerarRepaso = ({
  cantidad,
  inicio,
  imagenes,
  aleatorio,
  favoritos,
}) => {
  const items = JSON.parse(localStorage.getItem("examen-204-favoritos")) ?? [];

  let listaPreguntas = data;

  if (favoritos) {
    listaPreguntas = data.filter((x) => items.includes(x.id));
  }

  let todasPreguntas = imagenes
    ? listaPreguntas.slice(parseInt(inicio), parseInt(inicio + cantidad))
    : listaPreguntas
        .filter((x) => x.respuestas.length > 0)
        .slice(parseInt(inicio), parseInt(inicio + cantidad));

  todasPreguntas = aleatorio ? randomArray(todasPreguntas) : todasPreguntas;

  const examen = todasPreguntas.map((x) => {
    x.respuestas = randomArray(x.respuestas);
    return x;
  });

  const dataExamen = {
    preguntas: examen,
    nota: 0,
    estado: "Incompleto",
    tiempo: 0,
    fechaCrea: new Date(),
    fechaEdit: new Date(),
    id: crypto.randomUUID(),
    tipo: "Repaso",
  };

  const examenes = ObtenerExamenes();

  examenes.push(dataExamen);
  AgregarExamen(examenes);
  return dataExamen;
};

export const MoficarRespuesta = ({ idExamen, idPregunta, respuesta }) => {
  const items = JSON.parse(localStorage.getItem("examen-204")).map(
    ((x) => {
      if (x.id === idExamen) {
        x.ultimaPregunta = idPregunta;
        x.preguntas = x.preguntas?.map((y) => {
          if (y.id === idPregunta) {
            y.usuarioRespuesta = respuesta.replace(".", "");
            y.fechaEdit = new Date();
          }
          return y;
        });
      }
      return x;
    }) ?? []
  );

  AgregarExamen(items);
};

export const ObtenerNota = ({ idPregunta }) => {
  if (!idPregunta) {
    return "";
  }

  const items = JSON.parse(localStorage.getItem("examen-204-notas")) ?? [];

  const notaActual = items.find((x) => x.id == idPregunta);

  return notaActual?.notas ?? "";
};

export const ActualizarNota = ({ idPregunta, notas }) => {
  if (!idPregunta) {
    return "";
  }

  let items = JSON.parse(localStorage.getItem("examen-204-notas")) ?? [];
  const item = items.find((x) => x.id == idPregunta) ?? {};
  items = items.filter((x) => x.id != idPregunta);

  item.id = idPregunta;
  item.notas = notas;

  items.push(item);

  localStorage.setItem("examen-204-notas", JSON.stringify(items));
};

export const GuardarFavorito = (idPregunta) => {
  let items = JSON.parse(localStorage.getItem("examen-204-favoritos")) ?? [];
  if (items.includes(idPregunta)) {
    items = items.filter((x) => x != idPregunta);
  } else {
    items.push(idPregunta);
  }

  localStorage.setItem("examen-204-favoritos", JSON.stringify(items));
};

export const ExisteFavorito = ({ idPregunta }) => {
  const items = JSON.parse(localStorage.getItem("examen-204-favoritos")) ?? [];
  return items.includes(idPregunta);
};

export const CantidadFavoritos = () => {
  const items = JSON.parse(localStorage.getItem("examen-204-favoritos")) ?? [];
  return items.length;
};

export const ListaFavoritos = () => {
  const items =
    JSON.parse(localStorage.getItem("examen-204-favoritos") ?? "[]") ?? [];
  return items;
};

export const ActualizarFavoritosJSON = ({ favoritos }) => {
  localStorage.setItem("examen-204-favoritos", favoritos ?? "[]");
};

export const TerminarExamen = ({ idExamen }) => {
  const items = JSON.parse(localStorage.getItem("examen-204")).map(
    ((x) => {
      if (x.id === idExamen) {
        x.fechaEdit = new Date();
        x.nota = (
          (x.preguntas?.filter((x) =>
            x.respuestaCorrecta.includes(x.usuarioRespuesta)
          ).length /
            x.preguntas.length) *
          100
        ).toFixed(2);
        x.estado = "Terminado";
        x.ultimaPregunta = x.preguntas[0].id;
      }
      return x;
    }) ?? []
  );
  AgregarExamen(items);
};

export const ActualizarTiempoExamen = ({ idExamen }) => {
  const items = JSON.parse(localStorage.getItem("examen-204")).map(
    ((x) => {
      if (x.id === idExamen && x.estado != "Terminado") {
        x.tiempo = parseInt(x.tiempo ?? "0") + 1;
        x.fechaEdit = new Date();
      }
      return x;
    }) ?? []
  );
  AgregarExamen(items);
};

export const EliminarExamen = (idExamen) => {
  const items = JSON.parse(localStorage.getItem("examen-204")).filter(
    ((x) => {
      return x.id != idExamen;
    }) ?? []
  );

  AgregarExamen(items);
};

export const ClonarExamen = (idExamen) => {
  const items = JSON.parse(localStorage.getItem("examen-204")) ?? [];
  const item = items.find((x) => x.id === idExamen);
  const clone = JSON.parse(JSON.stringify(item));
  clone.id = crypto.randomUUID();
  clone.nota = 0;
  clone.fechaCrea = new Date();
  clone.fechaEdit = new Date();
  clone.tiempo = 0;
  clone.estado = "Incompleto";
  clone.preguntas = clone.preguntas.map((x) => {
    x.usuarioRespuesta = null;
    x.respuestas = randomArray(x.respuestas);
    delete x.usuarioRespuesta;
    return x;
  });

  clone.preguntas = randomArray(clone.preguntas);

  delete clone.ultimaPregunta;

  items.push(clone);
  AgregarExamen(items);
};

export const ObtenerPaginaExamTopic = (idPregunta) => {
  const examen = data.findIndex((x) => x.id === idPregunta);
  const index = Math.trunc(examen * 0.1 + 1);
  return index;
};

const randomArray = (array) => {
  array = array.sort(() => Math.random() - 0.5);
  return array;
};

export const ObtenerPreguntasImagenes = () => {
  return data.filter(
    (x) => x.respuestas.length == 0 || x.imgPregunta?.length > 0
  );
};

export const ObtenerPreguntasAleatoriasImagenes = () => {
  const preguntas = dataImagenes
    .filter(
      (x) =>
        x.respuestas.length > 0 &&
        x.respuestaCorrecta.length > 1 &&
        typeof x.respuestas[0].label != "undefined"
    )
    .sort(() => Math.random() - 0.5);

  return preguntas;
};

export const ObtenerDatosImagenes = () => {
  const coleccion = "examen-204-imagenes";
  return JSON.parse(localStorage.getItem(coleccion)) ?? [];
};

export const ActualizarDatosImagenes = (id, correcta) => {
  const coleccion = "examen-204-imagenes";
  let items = JSON.parse(localStorage.getItem(coleccion)) ?? [];
  let dato = items.find((x) => x.id == id) ?? {};
  items = items.filter((x) => x.id != id);

  if (typeof(dato.id) == "undefined") {
    dato = {
      id : id, 
      correctas : 0,
      incorrectas : 0
    }
  }

  dato.correctas += correcta ? 1 : 0;
  dato.incorrectas += !correcta ? 1 : 0;

  items.push(dato);

  localStorage.setItem(coleccion, JSON.stringify(items));

  return items;
};
