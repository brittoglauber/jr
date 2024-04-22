import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import Faqs from "./pages/_layouts/faqs";
import Sobre from "./pages/_layouts/sobre";
import { NotFound } from "./pages/_layouts/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/about",
    element: <Sobre />,
  },
]);
