import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { PaisesPage } from "@/pages/PaisesPage";
import { PaisDetalle } from "@/pages/PaisDetalle";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/paises", element: <PaisesPage /> },
  { path: "/paises/:id", element: <PaisDetalle /> },
]);