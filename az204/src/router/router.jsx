import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { ExamamPage } from "../pages/ExamamPage";
import { MainPage } from "../pages/MainPage";
import { Resultado } from "../pages/Resultado";
import { Exportar } from "../components/Exportar";
import { Estudiar } from "../pages/Estudiar";

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
]);