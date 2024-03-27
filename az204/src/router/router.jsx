import { createBrowserRouter } from "react-router-dom";
import { ExamamPage } from "../pages/ExamamPage";
import { MainPage } from "../pages/MainPage";
import { Resultado } from "../pages/Resultado";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/examen/:idExamen/:idPregunta",
    element: <ExamamPage />
  },
  {
    path: "/resultado/:idExamen",
    element: <Resultado />
  },
]);