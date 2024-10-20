import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { ExamamPage } from "../pages/ExamamPage";
import { MainPage } from "../pages/MainPage";
import { Resultado } from "../pages/Resultado";
import { Exportar } from "../components/Exportar";
import { Estudiar } from "../pages/Estudiar";
// import { PreguntaChecks } from "../pages/PreguntaChecks";
import React from "react";
import { ScrollEjemplo } from "../pages/ScrollEjemplo";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/examen/:idExamen/:idPregunta",
    element: <ExamamPage />,
    
  },
  {
    path: "/resultado/:idExamen",
    element: <Resultado />
  },
  {
    path: "/favoritos",
    element: <Exportar />
  },
  {
    path: "/estudiar",
    element: <Estudiar />
  },
  {
    path: "/checks",
    element: <ScrollEjemplo />
  },
]);